import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 10px;
    width: 100%;
    height: 672px;
`;

export const noticeBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-bottom: 10px;
    padding-left: 30px ;
    width: 100%;
    height: 40px;
    cursor: pointer;

    & > svg {
        position: absolute;
        top: 25%;
        left: 5px;
        font-size: 18px;
    }
`;

export const userInfoBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 20px;
    width: 100%;
    height: 90px;
    font-size: 20px;
    font-weight: 600;
`;

export const userButtonBox = css`
    box-sizing: border-box;
    display: flex;
    border-radius: 20px;
    width: 150px;
    height: 50px;
    background-color: #2E5984;

    & button {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 16px;
        color: white;

        & > svg {
            margin-bottom: 3px;
        }
    }
`;

export const reservationBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
    height: 19px;
    font-size: 18px;

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
`;

export const doctorBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;
    height: 200px;

    & > div:not(:nth-last-of-type(1)) {
        border-bottom: 1px solid #dbdbdb;
    }
`;
