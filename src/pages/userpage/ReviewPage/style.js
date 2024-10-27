import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: #f0f1f3;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;