import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    font-size: 18px;
    font-weight: 600;

    & > p {
        margin-bottom: 5px;
    }

    :not(:nth-last-of-type(1)) {
        border-bottom: 1px solid #dbdbdb;
    }
`;