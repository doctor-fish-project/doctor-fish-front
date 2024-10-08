import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    padding: 0px 10px;
    width: 100%;
    height: 30px;

    & > p {
        font-size: 20px;
    }

    & svg {
        font-size: 25px;
        cursor: pointer;
    }
`;