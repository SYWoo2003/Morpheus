import React from 'react';
import styled from 'styled-components';


const AboutCard = () => {

    const Wrapper = styled.div`
        @import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);
        font-family: 'JejuMyeongjo';
        width: 100%;
        height: 25rem;
        background-color: white;
        z-index: 5;
        font-size: 15px;
        position: absolute;
        bottom: -7rem;;
    `

    const Name = styled.p`
        font-size: 1.3rem;
        font-weight: bold;
        position: relative;
        left: 24rem;
        margin-top: 2.5rem;
    `

    const Desc = styled.p`
        color: #666666;
        position: relative;
        font-size: 1rem;
        left: 24rem;
        
    `

    return (
        <Wrapper>
            <Name>Woo Sangyoon / Morpheus</Name>
            <Desc>우상윤 / 2003.04.18 </Desc><br />
            <Desc>한국디지털미디어고등학교 해킹방어과 재학 중</Desc>
            <Desc>이누 일반동아리 부동아리장</Desc>
            <Desc>어썰티브 창업동아리 동아리장</Desc>
            <Desc>디미고인 디자인팀에서 활동 중</Desc>
        </Wrapper>
    )
}
export default AboutCard;