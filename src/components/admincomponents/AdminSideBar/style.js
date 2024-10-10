import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: none;
    width: 240px;
    height: 100%;
    background-color: white;

    & > p {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        width: 100%;
        height: 50px;
    }
`;

export const adminInfoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #c5c5c5;
    padding-top: 20px;
    width: 100%;
    height: 280px;

    & > button {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        width: 80px;
        height: 30px;
    }
`;

export const profileBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 50%;
    box-shadow: 0px 0px 2px #00000088;
    width: 100px;
    height: 100px;
    cursor: pointer;
    overflow: hidden;

    & > img {
        height: 100%;
    }
`;

export const nameBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: 20px;
    width: 100%;

    & > div {
        display: flex;
        justify-content: center;
        font-size: 13px;
        width: 100%;

        & > p:nth-of-type(1)::after {
            display: inline-block;
            content: "";
            margin: 0px 10px;
            height: 50%;
            border-left: 1px solid #222222;
        }
    }

`;

export const categoryBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #c5c5c5;
    padding: 20px;
    width: 100%;
    height: 500px;

    & > button {
        display: flex;
        align-items: center;
        font-size: 15px;
        width: 200px;
        height: 40px;

        & > svg {
            margin-right: 20px;
            font-size: 22px;
        }
    }
`;

export const settingBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding: 20px;
    width: 100%;

    & > button {
        display: flex;
        align-items: center;
        font-size: 15px;
        width: 200px;
        height: 40px;

        & > svg {
            margin-right: 20px;
            font-size: 22px;
        }
    }
`;