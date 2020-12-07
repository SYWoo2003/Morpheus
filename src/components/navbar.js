import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const navbar = () => {


    const Wrapper = styled.div`
        position: fixed;
        width: 100%;
        height: 4rem;
        background-color: #ffffff;
        text-align: center;
        @import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);
        font-family: 'JejuMyeongjo';
        z-index: 100;
    `

    const Logoimg = styled.img`
        width: auto;
        height: 70%;
        margin-top: 0.7rem;
        vertical-align: middle;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    `

    const StyledLink = styled(Link)`
        text-decoration: none;
        color: #afafaf;
        transition: all 0.2s;
        padding-bottom: 10px;
        border-bottom: 0.2rem solid #00000000;
        margin: 1rem;
         &:hover, &:active{
           color: #000000;
           border-bottom: 0.2rem solid #000000;
        }
    `

    const TextEl = styled.span`
        position: relative;
        top: 0.3rem;
    `
    const ScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const ScrollToDesign = () => {
        window.scrollTo(0, 920);
    }

    const ScrollToProject = () => {
        window.scrollTo(0, 2100);
    }

    const Margin = styled.span`
        margin: 1rem;
    `

    return (
        <Wrapper>
            <Link to="/">
                <span onClick={ScrollToTop}>
                    <Logoimg src={Logo} alt="" />
                </span>
            </Link>
            <Margin />
            <StyledLink to="/ABOUT">
                <TextEl>About</TextEl>
            </StyledLink>

            <StyledLink to="/" onClick={ScrollToDesign}>
                <TextEl>Design</TextEl>
            </StyledLink>

            <StyledLink to="/" onClick={ScrollToProject}>
                <TextEl>Project</TextEl>
            </StyledLink>

            {/* <StyledLink to="/" onClick={ScrollToProject}>
                <TextEl>Contact</TextEl>
            </StyledLink> */}
        </Wrapper>
    )
}
export default navbar;