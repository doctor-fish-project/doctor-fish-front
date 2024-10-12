import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 186px;
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
    min-height: 125px;
    background-color: #ffffff;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    & div:not(:nth-last-of-type(1)) {
        margin-bottom: 5px;
    }
`;

export const defaultBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 18px;
    font-weight: 600;
`;

export const reservationBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 130px;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;
    height: 30px;
    font-size: 18px;

    & p {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > p:nth-of-type(1) {
        font-weight: 600;
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
    height: 80px;

    & > p {
        box-sizing: border-box;
        display: flex;
        justify-content: end;
        align-items: center;
        border-radius: 10px;
        padding: 0px 5px;
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
`;

