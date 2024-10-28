import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #f0f1f3;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const userInfoBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 10px 20px;
    width: 100%;
    min-height: 70px;
    font-size: 18px;
    font-weight: 600;
    background-color: white;
    cursor: pointer;

    & > div:nth-of-type(1) {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        width: 100%;
        cursor: pointer;

        & svg {
            margin-right: 5px;
            font-size: 25px;
            color: #4B61AA;
        }
    
        & > p:nth-of-type(1) {
            display: flex;
            align-items: center;
            color: #777777;
            font-size: 14px;
            cursor: pointer;
        }
    
        & div > p:nth-last-of-type(1) {
            font-size: 18px;
            cursor: pointer;
        }
    }

`;

export const reservationBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
    width: 100%;
`;

export const defaultBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    & button {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        border-radius: 10px;
        padding: 5px 10px;
        font-size: 16px;
        color: white;
        background-color: #4B61AA;
    }

`;

export const pageBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;

    & div {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 10px;
        background-color: white;
        padding: 10px 15px;  
        width: 152.5px;
        height: 120px;
        cursor: pointer;

        & p {
            box-sizing: border-box;
            display: flex;
            justify-content: flex-end;
            font-size: 20px;
            cursor: pointer;
        }

        & img {
            width: 60px;
            height: 60px;
        }
    }
`;