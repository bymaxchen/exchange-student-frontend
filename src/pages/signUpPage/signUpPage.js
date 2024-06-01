import React, { useState } from 'react';
import { Button, Typography, Link, Collapse  }  from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const whiteListDomains = ['edu.cn', 'sweden.edu']; // Add your white-listed domains here

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showHelpMessage, setShowHelpMessage] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(true);
  
  

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setShowHelpMessage(false); // Reset the help message on change
  };

  const handleEmailBlur = () => {
      const domain = email.split('@')[1];
      if (email && !whiteListDomains.includes(domain)) {
          setShowHelpMessage(true);
      } else {
          setShowHelpMessage(false);
      }
  };

  const handleSendCodeClick = () => {
    // Logic to send code
  };  

  return (
      <div className="flex flex-col justify-between h-screen p-8">
          <div className="w-full max-w-md mx-auto">
              <div className="flex items-center mb-8">
                  <button onClick={handleBackClick} className="text-gray-500">
                      &#x2190; {/* Unicode for left arrow */}
                  </button>
                  <Typography variant="h5" className="flex-grow text-center">
                      Sign Up
                  </Typography>
              </div>
              <div>
                  <Typography variant="h5" className="mb-2">
                      What's your university email?
                  </Typography>
                  <Typography variant="h6" className="mb-7 text-gray-500">
                      To explore the international student network of Wings Link, you need to enter the email address that your university assigned to you.
                  </Typography>
                  <input
                      type="email"
                      placeholder="name@edu.cn"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}              
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none mb-6"
                  />
                    {showHelpMessage && (
                        <div className="mb-6">
                            <Typography variant="paragraph">
                                It looks like your university isn't on our list of eligible institutions for Wings Link. Please ensure your email was entered correctly.
                            </Typography>
                            <div>
                                <hr className="my-4 border-gray-300" />

                                <div className='pl-4'>
                                  <Typography
                                      variant="h6"
                                      className="cursor-pointer"
                                      onClick={() => setCollapseOpen(!collapseOpen)}
                                  >                                     
                                  <strong>Which university is eligible?</strong>
                                  </Typography>
                                  
                                  <Collapse open={collapseOpen}>
                                      <Typography variant="paragraph">
                                          Wings Link is available for all universities in Sweden and China.
                                      </Typography>
                                  </Collapse>
                                </div>

                                
                            </div>                            
                        </div>
                    )}                
              </div>
          </div>
          <div className="w-full max-w-md mx-auto">
              <Typography variant="h6" className="mb-4 text-center">
                      We will send you a code to your email.
              </Typography>            
              <Button
                  fullWidth
                  color="black"
                  onClick={handleSendCodeClick}
                  className="mb-4"
              >
                  Send Me Code
              </Button>
              <Button
                  fullWidth
                  color="blue-gray"
                  onClick={handleSendCodeClick}
              >
                  Don’t have a university email?
              </Button>
          </div>
      </div>
  );
}