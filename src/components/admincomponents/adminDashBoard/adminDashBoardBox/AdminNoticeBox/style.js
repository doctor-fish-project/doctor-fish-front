import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c5c5c5;
    width: 100%;
    height: 50px;
    font-size: 16px;

    & > div:nth-of-type(1) {
        width: 450px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & > p {
        color: #52b6c6;
    }
`;
