import React from 'react';
import { Typography, Button  } from "@material-tailwind/react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function OnBoardingPage() {
    return (
        <div  className="flex flex-col justify-between min-h-screen">
            <Carousel showThumbs = {false} showArrows = {false} showStatus={false} autoPlay = {true} infiniteLoop = {true}> 
                    <div>
                        <img src="https://placehold.co/100x100" />
                        <Typography
                        variant="h1"
                        color="black"
                        className="mt-5 mb-4 text-2xl md:text-4xl lg:text-5xl"
                        >
                        Welcome to Wings Link
                        </Typography>
                        <Typography
                        variant="lead"
                        color="black"
                        className="mb-12 opacity-80"
                        >
                        Your gateway to cross-cultural connections and enriching exchange experiences! Let's embark on a journey of discovery together.
                        </Typography>
                    </div>
                    <div>
                        <img src="https://placehold.co/200x200" />
                        <Typography
                        variant="h1"
                        color="black"
                        className="mt-5 mb-4 text-2xl md:text-4xl lg:text-5xl"
                        >
                        International networking
                        </Typography>
                        <Typography
                        variant="lead"
                        color="black"
                        className="mb-12 opacity-80"
                        >
                        Expand your horizons! Connect with students from around the globe, forge meaningful friendships, and discover new perspectives.
                        </Typography>
                    </div>
            </Carousel>
            <div className="flex flex-col items-center pb-8">
                <Link to="/signup" className="w-4/5 mb-4">
                    <Button className="w-full">
                        Sign Up                
                    </Button>
                </Link>
                <Typography
                    variant="lead"
                    className="text-center"
                >
                    Already have an account?                 
                    <Link to="/signin" className="text-blue-500">
                        Log in
                    </Link>
                </Typography>
            </div>    
        </div>
    );
}