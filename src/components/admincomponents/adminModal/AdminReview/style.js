import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const container = css`
    box-sizing: border-box;
    display: flex;
    padding: 30px;
    width: 100%;
    height: 80%;
`;

export const reviewBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    padding: 30px;
    flex-grow: 1;
    height: 100%;
`;

export const nameBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 20px;
    font-weight: 600;

    & > img {
        box-sizing: border-box;
        margin-bottom: 3px;
        margin-right: 5px;
        
        border-radius: 50%;
        width: 40px;
        height: 40px;
        overflow: hidden;
    }

    & p:nth-of-type(1) {
        width: 230px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    & p:nth-of-type(2) {
        font-size: 18px;
        width: fit-content;
    }
`;

export const imgBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 100%;
    height: 300px;
    overflow: hidden;

    & img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const preButton = css`
    position: absolute;
    top: 50%;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        font-size: 20px;
        color: gray;
    }
`;

export const nextButton = css`
    position: absolute;
    top: 50%;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        font-size: 20px;
        color: gray;
    }
`;

export const dateAndLike = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    height: 25px;
    
    & p {
        font-size: 14px;
    }

    & svg {
        margin-right: 3px;
        transform: translateY(3px);
        font-size: 18px;
    }
`;

export const contentBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const commentBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    & > div {
        box-sizing: border-box;
        display: flex;
        width: 100%;
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    padding: 0px 30px;
    width: 100%;

    & button {
        border: 1px solid #52b6c6;
        border-radius: 10px;
        font-size: 14px;
        color: #52b6c6;
    }
`;