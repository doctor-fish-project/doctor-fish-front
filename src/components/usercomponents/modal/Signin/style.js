import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
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
        padding: 5px 10px 0px 10px;
        width: 100%;
        height: 40px;
        font-size: 18px;
        background-color: #efefef;
        outline: none;
        font-weight: 600;
    }

    & :not(:nth-last-of-type(1)) {
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

    & button:nth-of-type(1) {
        margin-bottom: 5px;
    }
`;

export const andBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 18px;

    ::before {
        content: "";
        flex-grow: 1;
        margin: 0px 8px;
        height: 1px;
        background-color: black;
    }

    ::after {
        content: "";
        flex-grow: 1;
        margin: 0px 8px;
        height: 1px;
        background-color: black;
    }
`;

export const oAuthBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 0px 5px;
    width: 100%;
    

    & button {
        box-sizing: border-box;
        border-radius: 10px;
        width: 100%;
        height: 30px;
        font-size: 20px;
    }

    & button:nth-of-type(1) {
        color: #ffffff;
        background-color: #4285F4;
    }

    & button:nth-of-type(2) {
        color: #ffffff;
        background-color: #03C75A;
    }

    & button:nth-of-type(3) {
        color: #000000;
        background-color: #FEE500;
    }

    & :not(button:nth-last-of-type(1)) {
        margin-bottom: 5px;
    }
`;