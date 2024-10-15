import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49%;
    height: 49%;
    z-index: 98;
    overflow: hidden;
    cursor: pointer;

    & img {
        width: 100%;
        height: 100%;
    }

    & > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        font-size: 25px;
        z-index: 99;
        color: gray;
    }
`;
