import { css } from "@emotion/react";

export const layout = css`
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

export const commentBox = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 10px;
    width: 100%;
    cursor: default;

    & span:nth-of-type(1) {
        margin-right: 10px;
        font-weight: 600;
    }

    & span:nth-of-type(2) {
        font-size: 14px;
    }
`;
