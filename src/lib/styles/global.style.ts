import { Reset } from '@wds-kit/core';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    touch-action:none;
    
    body {
        padding:
            env(safe-area-inset-top)
            env(safe-area-inset-right)
            env(safe-area-inset-bottom)
            env(safe-area-inset-left);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 500;
        font-family: Pretendard, -apple-system, Apple SD Gothic Neo, sans-serif;
    }
    h1,h2,h3,h4,h5,h6,p,a,span,q,ul,ol,li {
        margin: 0;
        padding: 0;
        line-height: 1.3;
        font-size: 14px;
        font-weight: 500;
        font-family: Pretendard, -apple-system, Apple SD Gothic Neo, sans-serif;
        color: #393a40;
    }
    ul,ol {
        list-style: none;
        margin: 0;
    }
    a,a:hover,a:active,a:focus {
        text-decoration: none;
    }
    iframe,
    fieldset,
    img {
        border: 0 none;
    }
    img {
        vertical-align: top;
    }
    ${Reset}
`;

const size = {
    mobile: '512px',
    tablet: '767px',
    smallDesktop: '1024px',
    desktop: '1250px',
};
const device = {
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    tablet: `@media only screen and (max-width: ${size.tablet})`,
    smallDesktop: `@media only screen and (max-width: ${size.smallDesktop})`,
    desktop: `@media only screen and (max-width: ${size.desktop})`,
};

export const theme = {
    device,
};
