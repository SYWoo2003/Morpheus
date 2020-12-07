import React from 'react';
import styled from 'styled-components';
import Top from '../components/top';
import IntroDesign from '../components/Intro_design';
import Navbar from '../components/navbar';
import IntroProject from '../components/Intro_project';

function Main() {

    const Wrapper = styled.div`
    `

    return (
        <Wrapper>
            <Navbar />
            <Top />
            <IntroDesign />
            <IntroProject />
        </Wrapper>
    );
}

export default Main;
