import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;

    & > ul {
        list-style-type: none;
        display: flex;
        justify-content: center;

        & > li {
            margin: 0px 5px;
        }

        & a {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0px 5px;
            min-width: 32px;
            height: 32px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
        }

        & .active {
            border-radius: 32px;
            background-color: #bbbbbb;
            color: #ffffff;
        }
    }
`;