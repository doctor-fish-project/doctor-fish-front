import { css } from "@emotion/react";

export const layout = (length) => css`
    box-sizing: border-box;
    display: flex;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 40px;
    width: 100%;
    height: 70px;
    font-size: 18px;
    font-weight: 500;
    background-color: #f2f3f8;

    & > tr {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        & > th {
            width:${1440 / (length - 1)}px;
        }

        & > th:nth-of-type(1) {
            width: 40px;
        }
    }
`;