import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-right: 5px;
    width: 100%;
    height: 80px;
    overflow-y: auto;
    cursor: pointer;
    
    & > img {
        box-sizing: border-box;
        margin-right: 5px;
        width: 60px;
        height: 60px;
        object-fit: contain;
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
    justify-content: center;

    & div:nth-of-type(1) {
        font-size: 18px;
    }

    & div:nth-of-type(2) {
        color: #777777;
    }
`;