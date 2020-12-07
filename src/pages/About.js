import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Background from '../assets/background.png';
import AboutCard from '../components/aboutcard';

const About = () => {

    const Back = styled.img`
        position: fixed;
        z-index: 0;
        width: 100%;
        height: auto;
    `
    return (
        <>
            <Navbar />
            <Back src={Background} />
            <AboutCard />
        </>
    );
}

export default About;
