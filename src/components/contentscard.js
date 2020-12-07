import React from 'react';
import styled from 'styled-components';

const ContentsCard = ({ img, desc, title }) => (
  <Container>
    <TopBorder className="rowline" />
    <BottomBorder className="rowline" />
    <LeftBorder className="colline" />
    <RightBorder className="colline" />
    <ImageWrapper>
      <Image src={img} title={title} />
    </ImageWrapper>
    <DescWrapper className="descwrapper">
      <Desc>
        {desc}
      </Desc>
    </DescWrapper>
  </Container>
);

export default ContentsCard;

const Container = styled.div`
  @import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);
  font-family: 'Jeju Myeongjo', serif;
  /* animation: cardAnimation 1.8s; */
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  transition: all 0.7s;
  overflow: hidden;
  position: relative;
  width: 14rem;
  height: 14rem;
  margin: 0 auto;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  /* @keyframes cardAnimation {
    from {
      opacity: 0%;
      margin-top: 15px;
    }
    to {
      opacity: 100%;
      margin-top: 0px;
    } */
  }

  &:hover {
    transform: scale(1.01);
  }
  &:hover {
    .descwrapper{
      opacity:0;
      transition: all 0.3s;
    }
    .rowline{
      width: 100%;
    }
    .colline{
      height: 100%;
    }
  } 
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  width: 100%;
`

const TopBorder = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #dddddd;
  z-index: 4;
  transition: all 0.3s;
`

const BottomBorder = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 3px;
  background-color: #dddddd;
  z-index: 4;
  transition: all 0.3s;
`

const LeftBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3px;;
  height: 0;
  background-color: #dddddd;
  z-index: 4;
  transition: all 0.3s;
`

const RightBorder = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 3px;;
  height: 0;
  background-color: #dddddd;
  z-index: 4;
  transition: all 0.3s;
`
const Image = styled.img`
  object-fit: cover;
  width: 14rem;
  height: 14rem;
  filter: saturate(105%);
    @media screen and (max-width: 600px){
    width: 20rem;
    height: 20rem;
  }
`;

const DescWrapper = styled.div`
  position: absolute;
  background-color: #00000080;
  color:white;
  padding-top:0.3rem;
  width: 20rem;
  height:3rem;
  z-index:3;
  margin-top:11.8rem;
  transition: all 0.3s;
`

const Desc = styled.p`
  position: absolute;
  text-align: left;
  top: -0.45rem; 
  left: 0.6rem; 
`