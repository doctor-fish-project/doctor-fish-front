import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    background-color: #2E5984;

    & > p {
        margin-bottom: 3px;
        color: #ffffff;
        font-size: 25px;
        font-weight: 600;
    }
`;