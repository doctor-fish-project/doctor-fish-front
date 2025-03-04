import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    & > p {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 600;
    }
`;

export const reviewContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const imgAndReview = css`
    box-sizing: border-box;
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    cursor: pointer;
    & * {
        cursor: pointer;
    }

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

export const reviewBox = css`
    box-sizing: border-box;
    padding-bottom: 10px;
    flex-grow: 1;
    width: 100%;
    cursor: default;

    & span:nth-of-type(1) {
        margin-right: 10px;
        font-weight: 600;
        font-size: 18px;
    }

    & span:nth-of-type(2) {
        font-size: 16px;
    }
`;

export const commentBox = css`
    box-sizing: border-box;
    width: 90%;
    margin-left: auto;
`;