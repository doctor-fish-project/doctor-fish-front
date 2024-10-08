import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    
    & > div:nth-of-type(1) {
        border-bottom: 1px solid #c5c5c5;
    }
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    outline: none;

    & > div {
        width: 100%;
        height: 100%;
    }

    & > div:nth-of-type(1) {
        border-right: 1px solid #c5c5c5;
    }
`;