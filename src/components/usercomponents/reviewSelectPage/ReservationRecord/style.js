import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
`;

export const infoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    padding: 5px 10px;

    & div {
        box-sizing: border-box;
        flex-grow: 1;
        & p:nth-of-type(1) {
            font-weight: 600;
        }
    
        & p:nth-last-of-type(1) {
            color: #52b6c6;
        }
    }

    & button {
        color: #000000;
        border-radius: 10px;
        padding: 0px 10px;
        font-size: 14px;
        :active {
            color: #c5c5c5;
        }
    }
`;