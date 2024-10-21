import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
`;

export const topContainer = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 0px 0px 2px #00000088;
    width: 200px;
    height: 200px;
    cursor: pointer;
    overflow: hidden;

    & > img {
        box-sizing: border-box;
        height: 100%;
    }
`;

export const inputContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 55%;
`;

export const infoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dbdbdb;
    padding: 5px 0px;
    font-size: 18px;
`;

export const inputBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    font-size: 18px;
    width: 100%;
    height: 40px;

    & input {
        font-size: 18px;
        padding: 0px 20px;
    }
`;

export const textareaBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 6px;
    width: 100%;
    
    & label {
        margin-bottom: 10px;
        font-size: 18px;
    }

    & textarea {
        border: none;
        border-radius: 10px;
        height: 100%;
        padding: 10px;
        background-color: #f2f3f8;
        font-size: 16px;
        resize: none;
        outline: none;
    }
`;