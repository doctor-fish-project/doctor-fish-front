import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    width: 100%;
    height: 100%;
`;

export const titleContainer = css`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const imgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    & img {
        background: none;
        width: 400px;
        height: 400px;
    }
`;