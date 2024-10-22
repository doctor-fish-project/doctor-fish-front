import { css } from "@emotion/react";

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;

    & > button {
        box-sizing: border-box;
        width: 100px;
    }
`;

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex-grow: 1;
    width: 100%;
`;