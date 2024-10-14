import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #dbdbdb;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;