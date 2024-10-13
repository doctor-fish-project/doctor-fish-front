import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 40px;
    width: 100%;
    height: 50px;

    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
    }

    & button {
        width: 60px;
        height: 30px;
        background-color: #52b6c6;
        color: white;
    }
`;
