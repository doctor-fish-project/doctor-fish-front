import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-top: 200px;
    padding: 0px 200px;
    width: 100%;
    flex-grow: 1;
`

export const signupContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const textContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const inputBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 500px;
    height: 85px;

    & > label {
        margin-bottom: 5px;
    }

    & > input {
        box-sizing: border-box;
        padding: 0px 10px;
        border-radius: 10px;
        height: 40px;
        background-color: #f2f3f8;
        font-size: 14px;
    }

    & > p {
        display: flex;
        justify-content: end;
        align-items: center;
        width: 100%;
        color: red;
        font-size: 13px;
        

    }
`;

export const selectBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    width: 500px;

    & p {
        margin-right: 20px;
    }
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    
`;

export const textareaBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 500px;
    height: 148px;

    & label {
        margin-bottom: 5px;
    }

    & textarea {
        border: none;
        border-radius: 10px;
        height: 100%;
        padding: 10px;
        background-color: #f2f3f8;
        resize: none;
        outline: none;
        font-size: 14px;
    }
`;