import { css } from "@emotion/react";

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;

    & > button {
        box-sizing: border-box;
        width: 100px;
    }
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 90%;
    height: 300px;
`;

export const contentBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;

    & > textarea {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        padding: 10px;
        width: 90%;
        height: 100%;
        background-color: #dbdbdb;
        resize: none;
        outline: none;
    }
`;