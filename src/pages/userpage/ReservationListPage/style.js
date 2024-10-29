import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    flex-grow: 1;
    width: 100%;
    height: 760px;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    background-color: #f0f1f3;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;