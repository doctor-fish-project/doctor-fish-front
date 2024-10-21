import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 5px 10px;
    width: 100%;

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;

        & > svg {
            font-size: 35px;
        }
    }
`;