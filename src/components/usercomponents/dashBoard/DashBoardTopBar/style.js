import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    padding: 0px 10px;
    width: 100%;
    height: 30px;

    & > p {
        box-sizing: border-box;
        width: fit-content;
        height: 100%;
        font-size: 20px;
        font-weight: 600;
    }

    
`;

export const iconBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100%;

    & > svg {
        font-size: 25px;
        cursor: pointer;
    }
`;