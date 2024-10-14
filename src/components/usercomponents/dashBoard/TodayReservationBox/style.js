import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    background-color: #2E5984;

    & > p {
        margin-bottom: 5px;
        color: #ffffff;
        font-size: 25px;
        font-weight: 600;
    }
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    min-height: 100px;
    background-color: #ffffff;

`;

export const defaultBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    background-color: transparent;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    height: 30px;
    justify-content: space-between;

    & p {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > p:nth-of-type(2) {
        border-radius: 10px;
        width: 70px;
        height: 100%;
        color: #ffffff;
        background-color: #2E5984;
    }
`;

export const body = css`
     box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    & > p {
        box-sizing: border-box;
        display: flex;
        justify-content: end;
        align-items: center;
        border-radius: 10px;
        padding: 0px 5px;
        width: 100%;
        color: #bbbbbb;
        background-color: transparent;
    }
`;

export const doctorInfoBox = css`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px;
    background-color: #dbdbdb;
`;

