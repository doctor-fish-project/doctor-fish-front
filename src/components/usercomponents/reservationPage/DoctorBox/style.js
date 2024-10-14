import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 70px;
    
    & > img {
        box-sizing: border-box;
        margin-right: 5px;
        border: 1px solid #dbdbdb;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        overflow: hidden;
    }

    & > svg {
        font-size: 25px;
    }

    & > button {
        box-sizing: border-box;
        border-radius: 5px;
        width: 40px;
        height: 30px;
        color: #ffffff;
        background-color: #2E5984;
    }

    & > button {
        box-sizing: border-box;
        border-radius: 10px;
        width: 40px;
        height: 30px;
        text-align: center;
        color: #ffffff;
        background-color: #1E3A5F;
    }
`;

export const nameAndDepartBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`;