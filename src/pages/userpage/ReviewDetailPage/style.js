import { css } from "@emotion/react";



export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100px;
        
        & > button {
            box-sizing: border-box;
            width: 50%;
            height: 100%;
        }
    }

`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const imgContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 90%;
    height: 300px;
`;

export const imgBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    width: 100%;
    height: 100%;
    cursor: pointer;

    & div:nth-of-type(1) {
        margin-right: 5px;
        margin-bottom: 5px;
    }

    & div:nth-of-type(3) {
        margin-right: 5px;
    }
`;

export const contentBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;

    & > textarea {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        padding: 10px;
        width: 90%;
        height: 100%;
        background-color: #dbdbdb;
        resize: none;
        outline: none;
    }
`;

export const commentBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 10px ;

    & > p {
        font-weight: 600;
        margin-bottom: 10px;
    }

    & > div:nth-last-of-type(1) > div:nth-last-of-type(1) {
        border: none;
    }
`;