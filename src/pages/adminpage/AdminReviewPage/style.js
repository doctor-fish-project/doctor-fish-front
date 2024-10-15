import { css } from "@emotion/react";

export const layout = (length) => css`
    box-sizing: border-box;
    padding: 0px 40px;
    width: 100%;
    height: 100%;
    
    & > tr {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        cursor: pointer;

        & > td {
            text-align: center;
            width: ${978 / (length - 1)}px;
        }

        & > td:nth-of-type(1) {
            width: 30px;
        }
    }
`;