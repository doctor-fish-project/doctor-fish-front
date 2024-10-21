import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #2E5984;
`;

export const container = css`
    display: flex;
    border: 1px solid #dbdbdb;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    box-shadow: 3px 3px 2px #00000038;
    background-color: #eeeeee;

    & h2 {
        font-weight: 400;
        color: #595959;
    }
`;

export const inputContainer = css`
    box-sizing: border-box;
    width: 100%;
    padding: 0px 20px;
`

export const inputBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50px;

    & input {
        box-sizing: border-box;
        border: 1px solid #c2c2c2;
        border-radius: 5px;
        padding: 0px 10px 0px 28px;
        width: 100%;
        height: 30px;
        background-color: #eeeeee;
        ::placeholder {
            color: gray;
            font-size: 13px;
        }
    }

    & > p {
        box-sizing: border-box;
        display: flex;
        justify-content: end;
        align-items: center;
        width: 100%;
        height: 20px;
        color: red;
        font-size: 13px;
    }

    & svg{
        color: #c2c2c2;

        :nth-of-type(1) {
            position: absolute;
            top: 7px;
            left: 7px;
        }

        :nth-of-type(2) {
            position: absolute;
            top: 47px;
            left: 30px;
        }
    }

    :not(:nth-last-of-type(1)) {
        margin-bottom: 5px;
    }
`;

export const buttonBox = css`
    display: flex;
    justify-content: center;
    width: 250px;
    height: 30px;

    & button {
        border-radius: 5px;
        width: 100%;
        height: 100%;
        background-color: #2E5984;
        color: white;

        :hover {
            background-color: #234566;
        }

        :active {
            background-color: #2E5984;
        }
    }
`;