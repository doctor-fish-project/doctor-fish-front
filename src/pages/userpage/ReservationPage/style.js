import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    & > div:not(:nth-last-of-type(1)) {
        border-bottom: 1px solid #dbdbdb;
    }
`;