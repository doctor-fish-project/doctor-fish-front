import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 10px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const noticeBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-bottom: 5px;
    padding-left: 30px;
    width: 100%;
    height: 30px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    & > svg {
        position: absolute;
        left: 10px;
        font-size: 20px;
    }
`;

export const userInfoBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-bottom: 5px;
    padding: 20px;
    width: 100%;
    height: 70px;
    font-size: 20px;
    font-weight: 600;

    & > button {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 100px;
        height: 50px;
        font-size: 16px;
        color: white;
        background-color: #2E5984;
    }
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
        background-color: #2E5984;
    }

`;

export const doctorBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;

    & > div:not(:nth-last-of-type(1)) {
        border-bottom: 1px solid #dbdbdb;
    }
`;
