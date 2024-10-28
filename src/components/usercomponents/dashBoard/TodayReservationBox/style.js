import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: white;
    width: 100%;
    min-height: 100px;

    & > p {
        margin-bottom: 10px;
        color: #000000;
        font-size: 20px;
        font-weight: 900;
    }
    

`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-radius: 10px;
    width: 100%;
    background-color: #ffffff;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
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
    width: 100%;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 16px;

    & > div {
        box-sizing: border-box;
        display: flex;
        align-items: center;

        & > p:nth-of-type(1) {
            color: #777777;
            margin-right: 10px;
        }

        & > p:nth-of-type(2) {
            margin-right: 10px;
            font-weight: 700;
            color: #4B61AA;
        }
    }

    & p {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #23c197;
    }

    & > p:nth-of-type(1) {
        font-weight: 600;
    }

`;

export const body = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
`;

export const doctorInfoBox = css`
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    & > div {
        display: flex;

        & > p:nth-of-type(1) {
            color: #777777;
            margin-right: 10px;
        }

        & > p:nth-of-type(2) {
            color: #777777;
            font-weight: 700;
        }
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    border-radius: 10px;
    
    & button {
        position: relative;
        flex-grow: 1;
        border-radius: 10px;
        padding: 10px;
        font-size: 16px;
        color: #4B61AA;
        background-color: #4B61AA25;

        & svg {
            position: absolute;
            top: 14px;
            font-size: 18px;
        }
    }
`;