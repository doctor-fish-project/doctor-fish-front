import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
`;

export const topBar = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0px 10px;
    width: 100%;
    height: 30px;

    & > p {
        font-size: 20px;
    }

    & svg {
        font-size: 25px;
        cursor: pointer;
    }
`;