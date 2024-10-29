import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;

    & > div:nth-of-type(1) {
        padding-bottom: 10px;
    }
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px 0 auto;
    border-radius: 50%;
    box-shadow: 0px 0px 2px #00000088;
    width: 40px;
    height: 40px;
    cursor: pointer;
    overflow: hidden;

    & > img {
        box-sizing: border-box;
        height: 100%;
    }
`;

export const commentContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border-bottom: 1px solid #dbdbdb;
    flex-grow: 1;
`;

export const commentBox = css`
    box-sizing: border-box;
    flex-grow: 1;
    padding-bottom: 10px;
    cursor: default;

    & span:nth-of-type(1) {
        margin-right: 10px;
        font-weight: 600;
    }

    & span:nth-of-type(2) {
        font-size: 14px;
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    width: 100%;

    & > div {
        box-sizing: border-box;
        & > button {
            padding: 5px 10px;
            flex-grow: 1;
            font-size: 13px;
            color: #777777;
        }
    }
`;
