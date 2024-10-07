import { css } from "@emotion/react";

export const reset = css`
    }

    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
    }
    
    h1, h2, h3, ul, p {
        margin: 0;
        padding: 0;
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
        outline: none;
        font-weight: 500;
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