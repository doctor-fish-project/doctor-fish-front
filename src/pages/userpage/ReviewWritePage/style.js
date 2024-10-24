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

export const recordBox = css`
    box-sizing: border-box;
    display: flex;
    margin-bottom: 5px;
    width: 90%;
`;

export const imgContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 90%;
    height: 300px;
`;

export const imgBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    width: 100%;
    height: 100%;
    cursor: pointer;

    & div:nth-of-type(1) {
        margin-right: 5px;
        margin-bottom: 5px;
    }

    & div:nth-of-type(3) {
        margin-right: 5px;
    }
`;

export const defaultBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > p {
        font-size: 18px;
    }

    & svg {
        font-size: 30px;
    }
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

export const loadingLayout = css`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #00000033;
`;