import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49%;
    height: 49%;
    overflow: hidden;
    cursor: pointer;

    & img {
        width: 100%;
        height: 100%;
    }

    & svg {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 30px;
        height: 30px;
        z-index: 99;
        font-size: 30px;
        font-weight: 600;
        color: #ffffff;
    }

    & button {
       

    }
`;
