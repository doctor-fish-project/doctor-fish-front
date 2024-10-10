import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 70px;
    cursor: pointer;
    
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
        cursor: pointer;
    }
`;

export const nameAndDepartBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`;