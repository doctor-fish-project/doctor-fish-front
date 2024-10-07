import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 50%;
    
    & input {
        box-sizing: border-box;
        margin: 10px 0px;
        border: none;
        border-radius: 10px;
        padding: 0px 10px;
        background-color: #f0f0f0da;
        width: 100%;
        height: 40px;
        font-size: 16px;

        ::placeholder {
            font-size: 15px;
            font-weight: 600;
        }
    }

    & > p {
        font-weight: 400;
    }

    & :nth-last-of-type(1) {
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
    }
`;

export const buttonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    height: 40px;
    background-color: #2E5984;

    & button {
        width: 100%;
        height: 100%;
        color: white;
    }
`;

export const signupBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;

    & button {
        margin-left: 10px;
        border-bottom: 1px solid gray;
        font-size: 15px;
        color: gray;
    }
`;