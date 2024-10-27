import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: #f0f1f3;
`;

export const noticeBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px 10px;
    width: 100%;
    height: 60px;
    background-color: white;

    & div:nth-of-type(1) {
        box-sizing: border-box;
        flex-grow: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-weight: 600;
        color: #0b8fac;
    }

    & div:nth-last-of-type(1) {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        font-size: 12px;
    }
`;