import { css } from "@emotion/react";

export const timeBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    font-size: 22px;
    font-weight: 900;
    color: #52b6c6;

    & > p {
        width: 100%;
        height: 30px;
        margin-bottom: 5px;
    }
`;

export const timeLimitBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    border-radius: 10px;
    background-color: #f2f3f8;

    & p {
        font-size: 18px;
        font-weight: 400;
        color: #c5c5c5;
    }
`;