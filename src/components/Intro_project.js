import React from 'react';
import styled from 'styled-components';
import ContentsList from './p_contentslist';

const IntroProject = () => {

    const Wrapper = styled.div`
        padding-bottom: -2rem;
    `

    const MainText = styled.div`
        font-family: 'Chosunilbo_myungjo';
        font-size:3rem;
        text-align:center;
        padding-top:8rem;
    `

    const SubText = styled.div`
        font-family: 'Chosunilbo_myungjo';
        font-size:1.2rem;
        text-align:center;
        padding-top:0.7rem;
        padding-bottom: 1rem;
    `

    return (
        <Wrapper>
            <MainText>Project</MainText>
            <SubText>개발 프로젝트</SubText>
            <ContentsList />
        </Wrapper>
    )
}
export default IntroProject;