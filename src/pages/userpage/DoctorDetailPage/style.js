import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 100%;

    & > img {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
`;


export const header = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;
    height: 200px;
`;

export const body = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;
`;