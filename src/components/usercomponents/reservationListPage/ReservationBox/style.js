import { css } from "@emotion/react";

export const layout =css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;

    :not(:nth-last-of-type(1)) {
        border-bottom: 1px solid #dbdbdb;
    }
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;

export const body = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: end;
`;