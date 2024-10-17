import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c5c5c5;
    width: 100%;
    height: 50px;
    font-size: 16px;
    cursor: pointer;

    & > p {
        width: 25%;
    }

    & p:nth-of-type(1) {
        color: #b2b2b2;
    }

    & p:nth-of-type(2) {
        color: #52b6c6;
    }

    & p:nth-of-type(3) {
        color: #b2b2b2;
    }

    & p:nth-last-of-type(1) {
        text-align: center;
        border-radius: 5px;
        padding: 3px 0px;
        font-size: 14px;
        width: 80px;
        background-color: #dfe3eb;
        color: #686868;
    }
`;