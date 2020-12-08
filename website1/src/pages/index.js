import React, { useState } from 'react';
import Navbar from '../components/Navbar/index';
import SideBar from '../components/Sidebar/index';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjeone, homeObjeTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

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
            <InfoSection {...homeObjeone} />
            <InfoSection {...homeObjeTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    );
};

export default Home;
