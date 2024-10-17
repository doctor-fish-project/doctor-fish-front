import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 30px;
    width: 49%;
    height: 49%;
    overflow: hidden;
    background-color: #ffffff;

    & > div {
        cursor: pointer;
    }
`;