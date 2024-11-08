import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: auto;
`;

export const titleBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    font-size: 18px;
`;

export const dateBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    padding-right: 20px;
    width: 100%;
    height: 30px;
    background-color: #eeeeee;
`;

export const contentBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    & * {
        font-size: 16px;
    }

    .ql-container {
        border: none !important;
    }

    .ql-editor {
        border: none !important;
        padding: 0;
    }
`;