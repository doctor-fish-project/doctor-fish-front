import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 100%;
    height: 100%;
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    margin: auto 0;
    padding-top: 80px;
    width: 100%;

    & img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    & > div {
        box-sizing: border-box;
        display: flex;
        margin-bottom: 10px;
        width: 95%;

        & > button:nth-of-type(1) {
            flex-grow: 1;
            border-radius: 10px;
            padding: 10px 10px;
            font-size: 14px;
            background-color: #0b8fac;
            color: white;
        }

    }

    & > div:nth-last-of-type(1) {
        box-sizing: border-box;
        display: flex;
        margin-bottom: 10px;
        width: 95%;

        & > button:nth-of-type(1) {
            flex-grow: 1;
            border-radius: 10px;
            padding: 10px 10px;
            font-size: 14px;
            background-color: #7bc1b7;
            color: white;
        }
    }
    
`;

export const singupBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    & button {
        font-size: 14px;
        color: #777777;
    }
`;