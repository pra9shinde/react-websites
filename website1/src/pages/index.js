import React, { useState } from 'react';
import Navbar from '../components/Navbar/index';
import SideBar from '../components/Sidebar/index';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar isOpen={isOpen} toggle={toggleHandler} />
            <SideBar isOpen={isOpen} toggle={toggleHandler} />
            <HeroSection />
            <InfoSection />
        </>
    );
};

export default Home;
