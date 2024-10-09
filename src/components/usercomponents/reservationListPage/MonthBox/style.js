import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    background-color: #ffffff;

    & > p {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: 600;
    }
`;