import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 100%;

    & > p {
        width: 100%;
        font-size: 20px;
        font-weight: 600;
    }

    & > img {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        width: 100px;
        height: 100px;
        object-fit: contain;
        overflow: hidden;
        cursor: pointer;
    }

    & > button {
        width: 100px;
    }
`;

export const userInfo = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 5px;
    width: 100%;

    & > p:nth-of-type(1) {
        font-size: 20px;
    }

    & > p:nth-of-type(2) {
        font-size: 18px;
        color: #777777;
    }
`;

export const userInfoBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    align-items: end;
    flex-grow: 1;
    width: 100%;

    & > button:nth-of-type(1) {
        margin-right: 5px;
    }
`;

export const userRecord = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;

    & > button {
        box-sizing: border-box;
        padding: 5px;
        width: 100%;
        height: 50px;
    }

    & > :not(button:nth-last-of-type(1)) {
        border-bottom: 1px solid #dbdbdb;
    }
`

export const logoutBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: end;
    flex-grow: 1;
    width: 100%;

    & > button {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        width: 100%;
        height: 50px;
        color: red;
    }
`;