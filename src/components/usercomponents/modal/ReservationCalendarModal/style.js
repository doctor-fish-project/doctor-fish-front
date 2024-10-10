import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const cancelButtonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    padding: 5px 10px;
    width: 100%;

    & svg {
        font-size: 35px;
    }
`;

export const timeBox = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #dbdbdb;
    padding: 5px;
    width: 100%;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    & button:not(:nth-of-type(4n)) {
        margin-right: 9.5px;
    }
`;