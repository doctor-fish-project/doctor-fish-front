import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
    background-color: #f0f1f3;
    width: 100%;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const doctorBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;