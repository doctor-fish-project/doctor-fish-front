import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;

    & button {
        width: 100%;
        height: 100%;
        font-size: 18px;
        color: #c5c5c5;
    }
`;