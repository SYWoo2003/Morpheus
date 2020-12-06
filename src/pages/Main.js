import React from 'react';
import styled from 'styled-components';
import Top from '../components/top';
import IntroDesign from '../components/Intro_design';
import Navbar from '../components/navbar';

function Main() {

    const Wrapper = styled.div`
    `

    return (
        <Wrapper>
            <Navbar />
            <Top />
            <IntroDesign />
        </Wrapper>
    );
}

export default Main;
