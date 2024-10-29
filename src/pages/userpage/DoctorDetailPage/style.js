import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 20px;
    width: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    & > img {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        width: 100%;
        height: 200px;
        object-fit: contain;
    }
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-bottom: 5px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    

    & p:nth-of-type(1) {
        font-size: 18px;
    }

    & p:nth-of-type(2) {
        margin-bottom: 10px;
        font-size: 18px;
    }

    & pre {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const body = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 10px;
    width: 100%;

    & pre {
        margin: 0;
    }
`;