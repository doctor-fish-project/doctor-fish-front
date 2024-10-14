import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 40px;
    width: 100%;
    height: 50px;

    & > tr {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        & > td {
            text-align: center;
            width:${1440 / 4}px;
        }

        & > td:nth-of-type(1) {
            width: 40px;
        }
    }
`;

export const modalContainer = css`
    position: absolute;
    transform: translate(50%, -50%);
    top: 50%;
    left: 25%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 800px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #00000066;
    z-index: 98;
    background-color: #ffffff;

    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 14px;
        border-radius: 10px;
        color: #444444;
        padding: 10px;
        cursor: pointer;
        &:hover {
            background-color: #f3f3f3;
        }
        &:active {
            background-color: #efefef;
        }
    }
    
`;
