import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 40px;
    width: 100%;
    height: 50px;

    & > tr {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        & > td {
            text-align: center;
            width:${1440 / 4}px;
        }

        & > td:nth-of-type(1) {
            width: 40px;
        }
    }
`;
