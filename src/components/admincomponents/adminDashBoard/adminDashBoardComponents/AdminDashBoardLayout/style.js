import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
    height: 100%;
    overflow: hidden;

    & div {
        cursor: pointer;
    }
`;