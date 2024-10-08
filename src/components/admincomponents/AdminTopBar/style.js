import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #c5c5c5;
    width: 100%;
    height: 100px;
`;

export const titleBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #c5c5c5;
    width: 320px;
    height: 100px;

    & h2 {
        cursor: pointer;
    }
`;

export const userInfoContainer = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    height: 100px;
`;

export const userInfoBox = css`
    width: fit-content;
    height: fit-content;
`;

export const buttonBox = css`
    padding: 0px 10px;
`;