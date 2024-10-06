import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    background-color: #1E3A5F;

    & > p {
        margin-bottom: 5px;
        color: #ffffff;
        font-size: 25px;
        font-weight: 600;
    }

    & :not(:nth-last-of-type(1)) {
        margin-bottom: 10px;
    }
`;