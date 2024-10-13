import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 40px;
    width: 100%;
    height: 70px;
    font-size: 18px;
    font-weight: 500;
    background-color: #f2f3f8;

    & div {
        width: fit-content;
    }
`;