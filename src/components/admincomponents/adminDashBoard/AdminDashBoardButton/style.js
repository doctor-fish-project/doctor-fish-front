import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;

    & > button {
        box-sizing: border-box;
        font-size: 18px;
        color: #c5c5c5;
    }
`;