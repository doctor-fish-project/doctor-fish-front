import { css } from "@emotion/react";

export const layout = (length) => css`
    box-sizing: border-box;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 40px;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    background-color: #f2f3f8;

    & > tr {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        
        & > :not(th:nth-of-type(1)) {
            text-align: center;
            width: ${978 / (length - 1)}px;
        }

        & > th:nth-of-type(1) {
            width: 30px;
        }
    }
`;