import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const reviewBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    width: 90%;
    height: 40px;
    cursor: pointer;
`;

export const reviewIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13%;

    & > svg {
        font-size: 18px;
    }
`;

export const reviewTitle = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

export const userInfoContainer = css`
    box-sizing: border-box;
    display: flex;
    margin: 20px 0px 20px 0px;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    width: 90%;
    height: 90px;
`;

export const userInfoBox = css`
    box-sizing: border-box;
    display: flex;
    padding: 20px 20px;
    width: 100%;
    height: 100%;
`;

export const userBox = css`
    display: flex;
    align-items: center;
    font-size: 20px;
    width: 100%;
    height: 100%;
`;

export const userButtonBox = css`
    display: flex;
    border-radius: 20px;
    width: 50%;
    height: 100%;
    background-color: #1E3A5F;

    & button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 16px;
        color: white;
    }
`;

export const planTitleBox = css`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 19px;
`;

export const planButtonBox = css`
    display: flex;
    align-items: flex-end;
    width: 80px;

    & button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 14px;
        width: 100%;
        height: 100%;
    }
`;

export const planContentContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    border-radius: 20px;
    padding: 20px 20px;
    width: 90%;
    height: 180px;
    background-color: #1E3A5F;
    color: white;
`;

export const dateBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 70px;
    height: 100%;
    background-color: white;
    color: black;
`;

export const doctorBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    background-color: white;
    color: black;
    font-size: 20px;
`;