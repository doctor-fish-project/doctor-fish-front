import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    background-color: white;
    cursor: pointer;

    & > p {
        margin-bottom: 10px;
        color: #000000;
        font-size: 20px;
        font-weight: 900;
        cursor: pointer;
    }
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
            cursor: pointer;
        }

        & > p:nth-of-type(2) {
            margin-right: 10px;
            font-weight: 700;
            color: #4B61AA;
            cursor: pointer;
        }
    }

    & p {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #23c197;
        cursor: pointer;

        & :nth-of-type(1) {
            font-weight: 600;
        }
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

        & p:nth-of-type(1) {
            color: #777777;
            margin-right: 10px;
            cursor: pointer;
        }

        & > p:nth-of-type(2) {
            color: #777777;
            font-weight: 700;
            cursor: pointer;
        }
    }
`;