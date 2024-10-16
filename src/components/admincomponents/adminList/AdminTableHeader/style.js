import { css } from "@emotion/react";

export const headLayout = (length) => css`
    box-sizing: border-box;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 40px;
    width: 100%;
    font-size: 18px;
    background-color: #f2f3f8;

    & > tr {
        box-sizing: border-box;
        width: 100%;
        height: 50px;

        & > th:nth-of-type(1) {
            padding-left: 40px;
            min-width: 50px;
        }
        
        & > :not(th:nth-of-type(1)) {
            text-align: center;
            width: ${1430 / (length - 1)}px;
        }
    }
`;