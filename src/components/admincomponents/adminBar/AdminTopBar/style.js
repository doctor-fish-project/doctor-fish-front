import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    padding: 0px 30px;
    width: 100%;
    background-color: #b8b8b8;

    & > div {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        font-weight: 500;

        & > svg {
            padding-right: 10px;
        }
    }
`;
