import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthContext';
import { Layout, Menu, Input, Modal, Button, Form } from 'antd';
import { useNavigate, Link, useLocation  } from 'react-router-dom';
import { RedditOutlined, MessageOutlined, PlusOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import './HeaderBar.css';
import axios from 'axios'; // Ensure axios is installed


const { Header } = Layout;
const { Search } = Input;


const HeaderBar = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const location = useLocation();
    const { logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);



    const showModal = () => {
        setOpen(true);
      };

    
    const handleOk = async () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);

        const formData = {
          title,
          content,
        };

        try {
          // Substitute 'http://localhost:8081/api/signup' with your actual backend endpoint
          const response = await axios.post('/api/posts/create', formData);
          
          console.log(response.data);
        } catch (error) {
          console.error(error.response || error.message);
        } finally {
          setLoading(false);
        }
      };


    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };

    const onClickMenu = async (e) => {
        if (e.key === '/logout') {
            await logout();
            navigate("/");
            return;
        }
        if (e.key == "post") {
            return
        }
        navigate(e.key);
    }

    return (
        <>
        <Header className="header">
            <div className="logo">
                <Link to="/">
                    <img src='/images/logo.png'  alt="Logo" ></img>
                </Link>
            </div>
            <Search placeholder="Search CampusHub" className="search" />
            <Menu theme="dark" mode="horizontal" className="menu" selectedKeys={[location.pathname]} onClick={onClickMenu}>
                <Menu.Item className="msg" key="/message" icon={<MessageOutlined />}></Menu.Item>
                <Menu.Item className='post' key="post" onClick={showModal} icon={<PlusOutlined />}>Create</Menu.Item>
                <Menu.Item className='profile' key="/profile" icon={<UserOutlined />}>Profile</Menu.Item>
                <Menu.Item className='logout' key="/logout" icon={<LogoutOutlined />}>Logout</Menu.Item>
            </Menu>
        </Header> 
    
        <Modal okText="Post" title="Create Post" open={open} onOk={handleOk} onCancel={handleCancel} confirmLoading={confirmLoading} footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button className='special_button_atch'>Add Image</Button>
            <CancelBtn />
            <OkBtn />
          </>
        )}>
          <Form
              layout='vertical'
              name='post'
              className='post-form'
              initialValues={{ remember: true }}
              // onFinish={whatever}
            >
              <Form.Item>
                <Input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
              </Form.Item>
              <Form.Item>
                <Input.TextArea value={content} className='text_area' onChange={e => setContent(e.target.value)} placeholder='Content' autoSize={{minRows: 5, maxRows :20}} showCount maxLength={10000}/>
              </Form.Item>
            </Form>
            

        </Modal>
    </>
    );
};

export default HeaderBar;