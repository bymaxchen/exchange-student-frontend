import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField, Typography, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleLoginClick = () => {
      // Logic to handle login
  };

  const handleEmailLinkClick = () => {
      // Logic to handle email link
  };

  const validateEmail = () => {
      if (!email) {
          setEmailError('Email is required');
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
          setEmailError('Email has invalid format');
      } else {
          setEmailError('');
      }
  };

  const validatePassword = () => {
      if (!password) {
          setPasswordError('Password is required');
      } else {
          setPasswordError('');
      }
  };

  const isFormValid = !emailError && !passwordError && email && password;

    return (
        <div className="flex flex-col justify-between h-screen p-8">
            <div className="w-full max-w-md mx-auto">
                <div className="flex items-center pb-4">
                    <ArrowBackIcon onClick={handleBackClick} className="text-gray-500"/>
                    <Typography variant="h5" className="flex-grow text-center">
                        Login
                    </Typography>
                </div>
                <div>
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                        error={!!emailError}
                        helperText={emailError}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Link href="#" underline="none">
                                        Find Email
                                    </Link>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        onBlur={validatePassword}
                        error={!!passwordError}
                        helperText={passwordError}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControlLabel  sx={{ mb: '0.5rem' }}
                        control={
                            <Checkbox
                                checked={keepSignedIn}
                                onChange={(e) => setKeepSignedIn(e.target.checked)}
                            />
                        }
                        label="Keep me signed in"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mb: '1.5rem' }}
                        onClick={handleLoginClick}  
                        disabled={!isFormValid}
                    >
                        Log In
                    </Button>
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <Typography variant="body2" sx={{ mx: '1.5rem' }}>
                            Or
                        </Typography>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                      <Typography align="center" variant="body2"   sx={{ mb: '1.5rem' }}>
                        Email Me A Login Link
                      </Typography>
                </div>
            </div>
            <Typography align="center" variant="body2">
                    New to Wings Link?{' '}
                    <Link href="/signup" underline="none">
                        Sign up
                    </Link>
            </Typography>
        </div>
    );
}
