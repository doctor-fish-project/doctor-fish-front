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

export const logoBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    color: #0b8fac;
    width: 100%;
    height: 30px;
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
            font-size: 16px;
            font-weight: 600;
        }

        & + p {
            box-sizing: border-box;
            display: flex;
            justify-content: end;
            margin-bottom: 3px;
            font-size: 12px;
            font-weight: 500;
            width: 100%;
            color: #FF9999;
        }
    }
`;

export const submitButtonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    font-weight: 100;
    width: 90%;
    height: 40px;
    
    & button {
        box-sizing: border-box;
        border-radius: 10px;
        flex-grow: 1;
        padding: 10px 10px;
        font-size: 14px;
        background-color: #7bc1b7;
        color: white;
    }
`;