import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    & > p {
        margin-bottom: 5px;
        font-size: 30px;
        font-weight: 600;
    }
`;

export const cancelButtonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    padding: 5px 10px;
    width: 100%;

    & svg {
        font-size: 35px;
    }
`;

export const inputBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    width: 100%;

    & input {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        width: 100%;
        height: 40px;
        font-size: 18px;
        background-color: #efefef;
        outline: none;
    }

    & input:nth-of-type(1) {
        margin-bottom: 5px;
    }
`;

export const submitButtonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 5px;
    width: 100%;
    
    & button {
        box-sizing: border-box;
        border-radius: 10px;
        width: 100%;
        height: 40px;
        font-size: 20px;
        background-color: #dbdbdb;
    }
`;