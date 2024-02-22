import React, { useState, useContext } from 'react';
import { Card } from 'antd';
import { LikeOutlined, UserOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { like } from '../../../api/api';
import moment from 'moment';

// Function to generate a random color
const getRandomColor = () => {
  const colors = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#1890ff']; // Example color palette
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Post = ({ id, title, username: author, content, createTime, isAnonymous, likes: initialLikes, imageUrl }) => {
  const [likes, setLikes] = useState(initialLikes);
  const isToday = moment(createTime).isSame(moment(), 'day');
  const displayTime = isToday ? moment(createTime).fromNow() : moment(createTime).format('MMMM Do YYYY, h:mm:ss a');
  const borderColor = getRandomColor(); // Assuming getRandomColor is defined elsewhere

  // Function to handle like click
  const handleLikeClick = async () => {
    // Here you should call your like API
    // For demonstration, we'll just increment the likes count
    const updatedLikes = likes + 1;
    setLikes(updatedLikes);
    
    // If you have an API to call, you might do something like:
    try {
      const response = await like(id); // Assume likePostApiCall is your API call function
      if (response.success) {
        setLikes(response.likes);
      }
    } catch (error) {
      console.error('Failed to like the post:', error);
    }
  };

  return (
    <Card
      title={<div style={{ display: 'flex', alignItems: 'center' }}>{title}</div>}
      style={{ width: 600, margin: '16px auto', borderLeft: `6px solid ${borderColor}`, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
      actions={[
        <LikeOutlined key="like" onClick={handleLikeClick} />,
        <span key="likes" onClick={handleLikeClick}>{likes} Likes</span>,
        <span key="time">{displayTime}</span>,
      ]}
    >
      <p><UserOutlined style={{ marginRight: 8 }}/>{isAnonymous ? 'Anonymous' : author}</p>
      <p style={{ color: '#555' }}>{content}</p>
      {imageUrl && <img src={imageUrl} alt="Card" style={{ width: '100%' }} />}
    </Card>
  );
};

export default Post;
