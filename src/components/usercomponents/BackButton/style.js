import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 5px;
    width: 100%;
    height: 35px;

    & > button {
        position: absolute;
        display: flex;
        align-items: center;
        font-size: 25px;
    }

    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 18px;
        font-weight: 600;
    }
`;