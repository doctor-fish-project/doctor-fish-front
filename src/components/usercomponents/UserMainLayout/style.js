import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f0f1f3; 
`;

export const container = css`
    box-sizing: border-box;
    position: relative;
    border: 5px solid #000000;
    border-radius: 40px;
    width: 375px;
    height: 812px;
    box-shadow: 10px 10px 20px #00000050;
    background-color: white;
    overflow: hidden;
`;

export const topBar = css`
    position: absolute;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    background-color: white;
`;

export const topBarCenter = css`
    border-radius: 20px;
    width: 36%;
    height: 30px;
    background-color: black;
`;

export const clock = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32%;
    font-size: 15px;
    font-weight: 600;
    cursor: default;
`;

export const rightItems = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32%;
    & *:nth-of-type(2) {
        margin: 0px 5px;
    }
    & *:nth-of-type(3) {
        font-size: 22px;
    }
`;