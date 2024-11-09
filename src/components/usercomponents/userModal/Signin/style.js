import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    & > div:nth-of-type(4) {
        margin-bottom: 10px;
    }
`;

export const logoBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
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
    padding-bottom: 20px;
    width: 90%;
    
    & button {
        box-sizing: border-box;
        border-radius: 10px;
        padding: 10px 10px;
        flex-grow: 1;
        font-size: 14px;
        background-color: #0b8fac;
        color: white;
    }
`;

export const findBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
    width: 100%;

    & > p {
        font-size: 14px;
    }

    & > button {
        margin-left: 5px;
        border-bottom: 1px solid gray;
        padding: 0;
        font-size: 12px;
        color: gray;
    }
`;

export const pBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 45px 0 13px;
    color: #808080;
    width: 100%;

    & div {
        box-sizing: border-box;
        display: flex;
        border-bottom: 1px solid #808080;
        width: 95px;
        height: 0%;
    }
`;

export const oAuthBox = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        color: black;

        &:nth-of-type(1) {
            width: 50px;
            height: 50px;
            & > svg {
                font-size: 50px;
            }
        }
            
        &:nth-of-type(2) {
            width: 50px;
            height: 50px;
            color: #3C1E1E;
            background-color: #FAE100;
            border-radius: 5px;
            & > svg {
                font-size: 42px;
            }
        }
        &:nth-of-type(3) {
            width: 50px;
            height: 50px;
            color: white;
            background-color: #03C75A;
            border-radius: 5px;
        }
    }
`