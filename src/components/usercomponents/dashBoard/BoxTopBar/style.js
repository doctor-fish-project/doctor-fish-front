import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;
    min-height: 30px;
    font-size: 14px;
    font-weight: 600;
    
    & > p {
        display: flex;
        align-items: center;
        color: #777777;

        & svg {
            margin-right: 5px;
            font-size: 25px;
            color: #4B61AA;
        }
    }
`;