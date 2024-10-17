import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: none;
    width: 15%;
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
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: 20px;
    width: 100%;

    & > button {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-size: 16px;

        & > svg {
            margin-right: 20px;
            font-size: 22px;
        }
    }

    & > button:nth-last-of-type(2) {
        position: absolute;
        bottom: 54px;
        box-sizing: border-box;
    }

    & > button:nth-last-of-type(1) {
        position: absolute;
        bottom: 20px;
        box-sizing: border-box;
        
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