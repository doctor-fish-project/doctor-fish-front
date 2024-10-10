import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1280px;
    height: 100%;
`;

export const searchBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    width: 100%;
    height: 30px;

    & input {
        box-sizing: border-box;
        border: none;
        padding: 0px 5px;
        width: 1170px;
        height: 100%;
        background-color: #ffffff;
    }

    & button {
        box-sizing: border-box;
        width: 30px;
        height: 100%;

        & svg {
            box-sizing: border-box;
            font-size: 30px;
            color: #8b8b8b;
        }
    }
`;