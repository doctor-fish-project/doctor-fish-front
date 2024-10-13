import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 100%;

    & > img {
        box-sizing: border-box;
        display: flex;
        border-radius: 10px;
        margin-bottom: 5px;
        width: 100%;
        height: 200px;
    }

    & > button {
        width: 100;
    }
`;

export const userInfo = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    height: 100px;

    & > input {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
    }
`;

export const userInfoBox = css`
    box-sizing: border-box;
    display: flex;
`;

export const userRecord = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    height: 100px;

    & > button {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
    }
`

export const logoutBox = css`

`;