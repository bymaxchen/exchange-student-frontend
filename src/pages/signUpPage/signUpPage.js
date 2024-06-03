import React, { useState, useEffect } from 'react';
import { Button, Typography, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const whiteListDomains = ['edu.cn', 'sweden.edu']; // Add your white-listed domains here

export default function SignUpPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [showHelpMessage, setShowHelpMessage] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const [collapseOpen, setCollapseOpen] = useState(false);

    useEffect(() => {
        const domain = email.split('@')[1];
        if (domain && whiteListDomains.includes(domain)) {
            setIsEmailValid(true);
            setShowHelpMessage(false);
        } else {
            setIsEmailValid(false);
            if (isBlurred && email) {
                setShowHelpMessage(true);
            } else {
                setShowHelpMessage(false);
            }
        }
    }, [email, isBlurred]);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsBlurred(false);
    };

    const handleEmailBlur = () => {
        setIsBlurred(true);
    };

    const handleSendCodeClick = () => {
        // Logic to send code
    };

    return (
        <div className="flex flex-col justify-between h-screen p-8">
            <div className="w-full max-w-md mx-auto">
                <div className="flex items-center mb-8">
                    <ArrowBackIcon onClick={handleBackClick} className="text-gray-500"/>
                    <Typography variant="h5" className="flex-grow text-center">
                        Sign Up
                    </Typography>
                </div>
                <div>
                    <Typography variant="h6" sx={{ mb: '0.5rem' }}>
                        What's your university email?
                    </Typography>
                    <Typography variant="body2" sx={{ mb: '0.5rem' }} className="text-gray-500">
                        To explore the international student network of Wings Link, you need to enter the email address that your university assigned to you.
                    </Typography>
                    <input
                        type="email"
                        placeholder="name@edu.cn"
                        className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none mb-6"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                    />
                    {showHelpMessage && (
                        <div className="bg-red-100 p-4 mb-6">
                            <Typography variant="body2" color="error">
                                It looks like your university isn't on our list of eligible institutions for Wings Link. Please ensure your email was entered correctly.
                            </Typography>
                            <hr className="my-4 border-gray-300" />
                            <div onClick={() => setCollapseOpen(!collapseOpen)} className="flex items-center cursor-pointer mb-4">
                                {collapseOpen ? <ExpandLess /> : <ExpandMore />}
                                <Typography variant="body2" className="ml-2">
                                    <strong>Which university is eligible?</strong>
                                </Typography>
                            </div>
                            <Collapse in={collapseOpen}>
                                <Typography variant="body2" sx={{ ml: '1.5rem' }}>
                                    Wings Link is available for all universities in Sweden and China.
                                </Typography>
                            </Collapse>                            
                        </div>
                    )}

                </div>
            </div>
            <div className="w-full max-w-md mx-auto">
                <Typography variant="body2" sx={{ mb: '1.5rem' }} className="text-center">
                    We will send you a code to your email.
                </Typography>

                <Button
                    disabled={!isEmailValid}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSendCodeClick}
                    sx={{ mb: '1rem' }}
                >
                    Send Me Code
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    onClick={handleSendCodeClick}
                >
                    Don’t have a university email?
                </Button>
            </div>
        </div>
    );
}
