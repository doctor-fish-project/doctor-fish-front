import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100%;
`;

export const writeButtonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;

    & > button {
        font-size: 20px;
    }
`;

export const reviewContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;