import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #f0f1f3;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const noticeBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin: 20px 0;
    padding: 0 10px 0 30px;
    width: 100%;
    min-height: 40px;
    font-size: 18px; 
    font-weight: 600;
    background-color: white;
    cursor: pointer;

    & > svg {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 20px;
    }

    & p {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        margin-left: 10px;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
    }
`;

export const userInfoBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 10px 10px;
    width: 100%;
    min-height: 70px;
    font-size: 18px;
    font-weight: 600;
    background-color: white;

    & div > p:nth-last-of-type(1) {
        font-size: 14px;
    }

    & > button {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-size: 16px;
        color: white;
        background-color: #457FB2;
        & svg {
            margin-right: 5px;
        }
    }
`;

export const reservationBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
    background-color: white;
    width: 100%;
`;

export const defaultBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & button {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 200px;
        height: 50px;
        font-size: 16px;
        color: white;
        background-color: #7bc1b7;
    }

`;

export const doctorBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 10px;
    width: 100%;

    & > div:not(:nth-last-of-type(1)) {
        border-bottom: 1px solid #dbdbdb;
    }
`;
