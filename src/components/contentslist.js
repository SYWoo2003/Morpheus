import React from 'react';
import styled from 'styled-components';

import ContentsCard from './contentscard';
import contents from '../data/design_contents.json';

const ContentsList = () => (
    <Wrapper>
        <ListContainer>
            {contents.map(({ img, desc }, idx) => (
                <CardWrapper>
                    <ContentsCard
                        key={`contents-${idx}`}
                        img={require(`../assets/contentsimg/${img}.png`)}
                        desc={desc}
                    />
                </CardWrapper>
            ))}
        </ListContainer>
    </Wrapper>
);

const Wrapper = styled.div`
    text-align: center;
`

const ListContainer = styled.div`
text-align: left;
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: inline-block;
  justify-content: space-around;
  width: 76%;
`;

const CardWrapper = styled.div`
  margin: 2rem;
  display: inline-block;
`;

export default ContentsList;