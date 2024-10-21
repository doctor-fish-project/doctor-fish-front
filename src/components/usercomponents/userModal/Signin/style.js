import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const logoBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
`;

export const inputContainer = css`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding-bottom: 20px;
    width: 90%;
    height: 90%;
`;

export const inputBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90px;

    & input {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        margin-top: 5px;
        padding: 0px 10px;
        width: 100%;
        height: 40px;
        font-size: 18px;
        background-color: #efefef;
        outline: none;
        font-weight: 600;
        
        ::placeholder {
            font-size: 15px;
            font-weight: 600;
        }

        & + p {
            box-sizing: border-box;
            display: flex;
            justify-content: end;
            margin-bottom: 3px;
            width: 100%;
            font-size: 14px;
            color: red;
        }
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 20px;
    width: 90%;
    
    & button {
        box-sizing: border-box;
        border-radius: 10px;
        width: 100%;
        height: 40px;
        font-size: 20px;
        background-color: #2E5984;
        color: white;
    }
`;

export const findBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
    width: 100%;

    & button {
        margin-left: 10px;
        border-bottom: 1px solid gray;
        font-size: 15px;
        color: gray;
    }
`;