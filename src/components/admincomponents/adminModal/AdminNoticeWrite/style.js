import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const cancelButtonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 5px 10px;
    width: 100%;

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;

        & > svg {
            font-size: 35px;
        }
    }
`;

export const quillBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    .ql-toolbar {
        border: none !important;
        border-bottom: 1px solid #dbdbdb !important;
    }

    .ql-container {
        border: none !important;
    }
`;

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10px 0px;
    height: 50px;

    & > h1 {
        margin: 0;
    }

    & > button {
        box-sizing: border-box;
        border: 1px solid #52b6c6;
        border-radius: 10px;
        padding: 5px 10px;
        background-color: white;
        font-size: 12px;
        font-weight: 600;
        color: #52b6c6;
        cursor: pointer;
        :hover {
            background-color: #52b6c510;
        }
        :active {
            background-color: #52b6c530;
        }
    }
`;

export const titleInput = css`
    box-sizing: border-box;
    margin-bottom: 10px;
    border-bottom: 1px solid #dbdbdb;
    outline: none;
    padding: 5px 15px;
    width: 100%;
    font-size: 16px;
`;