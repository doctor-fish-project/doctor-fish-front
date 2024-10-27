import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    width: 100%;
    min-height: 30px;
    font-size: 20px;
    font-weight: 600;

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 0;
        font-size: 16px;
        color: #777777;

        & > svg {
            transform: translateY(2px);
            font-size: 20px;
        }
    }
`;