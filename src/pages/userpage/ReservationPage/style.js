import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #f0f1f3;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;