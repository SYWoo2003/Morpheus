import React from 'react';
import styled from 'styled-components';

import topimg from '../assets/top.gif';



const Top = () => {

    const Imgarea = styled.div`
        width:100%;
        height: 55rem;
        background-color:#202020;
        text-align:center;
    `

    const Topimg = styled.img`
        -webkit-user-drag:none;
        width: auto;
        height: 100%;
    `

    return (
        <>
            <Imgarea>
                <Topimg src={topimg} alt='' width='80%' />
            </Imgarea>
        </>
    )
}
export default Top;