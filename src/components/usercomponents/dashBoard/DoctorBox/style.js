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
        width: 70px;
        height: 70px;
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
`;