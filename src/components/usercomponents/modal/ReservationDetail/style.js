import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const cancelButtonBox = css`
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