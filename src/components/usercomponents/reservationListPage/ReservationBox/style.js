import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    cursor: pointer;

    :not(:nth-last-of-type(1)) {
        margin-bottom: 5px;
        border-bottom: 1px solid #dbdbdb;
    }
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 3px;
    height: 30px;
    justify-content: space-between;

    & p {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > p:nth-of-type(2) {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        padding: 0px 5px;
        width: fit-content;
        height: 100%;
        font-size: 13px;
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
        width: 100%;
        font-size: 14px;
        color: #bbbbbb;
        background-color: transparent;
    }
`;

export const doctorInfoBox = css`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #eeeeee;
    cursor: pointer;

    & * {
        cursor: pointer;
    }
`;