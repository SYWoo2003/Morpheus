import React from 'react';
import styled from 'styled-components';

const GlobalStyle = () => {

    const meta = document.createElement('meta');
    meta.name = 'google';
    meta.content = 'notranslate';
    document.getElementsByTagName('head')[0].appendChild(meta);

    const Font = styled.div`
    @font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }`

    return (
        <>
            <Font />
        </>
    )
}
export default GlobalStyle;