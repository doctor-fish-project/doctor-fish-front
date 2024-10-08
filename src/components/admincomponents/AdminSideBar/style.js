import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #c5c5c5;
    width: 320px;
    height: 800px;
`;


export const categoryBox = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & button {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        & svg {
            font-size: 16px;
            margin-right: 10px;
        }
    }
`;