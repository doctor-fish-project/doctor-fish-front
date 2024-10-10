import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
    height: 100%;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    
    & > div {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        width: 750px;
        height: 380px;
        background-color: white;
    }
`;

export const reservationBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    font-size: 18px;
`;

export const reservationInfoBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c5c5c5;
    width: 100%;
    height: 37px;

    & span {
        color: #b2b2b2;
    }

    & div:nth-last-of-type(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 27px;
        font-size: 15px;
        background-color: #dfe3eb;
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