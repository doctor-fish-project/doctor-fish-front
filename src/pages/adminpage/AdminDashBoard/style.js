import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #2E5984;
`;

export const container = css`
    display: flex;
    align-items: center;
    width: 1600px;
    height: 900px;
    box-shadow: 3px 3px 2px #00000038;
    background-color: #eeeeee;
`;

export const sideBar = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px solid #c5c5c5;
    width: 320px;
    height: 900px;
`;

export const titleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c5c5c5;
    width: 100%;
    height: 100px;
`;

export const categoryBox = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid #c5c5c5; */
    width: 100%;
    height: 100px;

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 40px;

        :hover, :active {
            border-radius: 5px;
            background-color: #A0CCEE;
            font-size: 16px;
            color: white;
        }

        & svg {
            font-size: 16px;
            margin-right: 10px;
        }
    }
`;