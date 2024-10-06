import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 100%;
    cursor: pointer;

    & > img {
        border: 1px solid #dbdbdb;
        border-radius: 50%;
        margin-bottom: 3px;
        width: 50px;
        height: 50px;
        overflow: hidden;
    }
`;

export const userInfoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;