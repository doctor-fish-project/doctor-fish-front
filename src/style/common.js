import { css } from "@emotion/react";

export const reset = css`
    @font-face {
        font-family: 'Freesentation-9Black';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2') format('woff2');
        font-style: normal;
    }

    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: 'Freesentation-9Black';
    }
    
    h1, h2, h3, ul, p {
        margin: 0;
        padding: 0;
        font-family: 'Freesentation-9Black';
        cursor: default;
    }

    input {
        outline: none;
    }

    button {
        border: none;
        padding: 0;
        color: #000000;
        background-color: transparent;
        font-family: 'Freesentation-9Black';
        outline: none;
        cursor: pointer;
    }

    button:active {
        color: #eeeeee;
        background-color: transparent;
    }

    button:disabled {
        color: #eeeeee;
        background-color: transparent;
        cursor: default;
    }

    @keyframes userModalOpen {
        from {
            inset: auto 0px -650px;
        }
        to {
            inset: auto 0px 0px;
        }
    }

    @keyframes userModalClose {
        from {
            inset: auto 0px 0px;
        }
        to {
            inset: auto 0px -650px;
        }
    }
`;