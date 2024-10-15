import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    width: 100%;
    height: 100%;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    
    &:nth-of-type(1) {
        margin-bottom: 30px;
    }
    
    & > div {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        flex-grow: 1;
        height: 100%;
        background-color: white;
    }
    & > div:nth-of-type(1) {
        margin-right: 15px;
    }
    & > div:nth-of-type(2) {
        margin-left: 15px;
    }
`;



export const buttonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;

    & button {
        width: 100%;
        font-size: 18px;
        color: #c5c5c5;
    }
`;

export const contentBox = css`
    box-sizing: border-box;
    display: flex;
    padding: 30px;
    font-size: 18px;
    font-weight: 400;
`;