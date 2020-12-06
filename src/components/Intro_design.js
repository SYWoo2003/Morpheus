import React from 'react';
import styled from 'styled-components';
import ContentsList from './contentslist';

const IntroDesign = () => {

    const Wrapper = styled.div`
    `

    const MainText = styled.div`
        font-family: 'Chosunilbo_myungjo';
        font-size:3rem;
        text-align:center;
        padding-top:9rem;
    `

    const SubText = styled.div`
        font-family: 'Chosunilbo_myungjo';
        font-size:1.2rem;
        text-align:center;
        padding-top:0.7rem;
        padding-bottom: 2rem;
    `

    return (
        <Wrapper>
            <MainText>Design</MainText>
            <SubText>디자인</SubText>
            <ContentsList />
        </Wrapper>
    )
}
export default IntroDesign;