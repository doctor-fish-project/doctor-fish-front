import { css } from "@emotion/react";

export const body = css`
    box-sizing: border-box;
    padding: 0px 40px;
    
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    & > tr {
        box-sizing: border-box;
        width: 100%;
        height: 51px;
        cursor: pointer;

        & > td {
            text-align: center;
            width: ${1480 / 5}px;

            & > button {
                border-radius: 5px;
                color: #ffffff;
                background-color: #c5c5c5;
            }

            & > button:nth-of-type(1) {
                margin-right: 5px;
            }

        }

        & > td:nth-of-type(1) {
            padding-left: 40px;
            width: 30px;
        }
    }
`;
