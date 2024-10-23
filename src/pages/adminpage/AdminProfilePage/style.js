import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
    flex-grow: 1;
`;

export const imgBox = (editState) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 40px;
    border-radius: 50%;
    box-shadow: 0px 0px 2px #00000088;
    width: 200px;
    height: 200px;
    cursor: ${editState ? "pointer" : "default"};
    overflow: hidden;

    & > img {
        box-sizing: border-box;
        height: 100%;
    }
`;

export const inputContainer = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 0px 200px;
    flex-grow: 1;
`;

export const singupContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const inputBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 500px;

    & label {
        margin-bottom: 5px;
    }

    & input {
        box-sizing: border-box;
        padding: 0px 10px;
        border-radius: 10px;
        height: 40px;
        background-color: #f2f3f8;
        font-size: 14px;
    }
`;

export const textContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const textareaBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 500px;
    height: 148px;

    & label {
        margin-bottom: 5px;
    }

    & textarea {
        border: none;
        border-radius: 10px;
        height: 100%;
        padding: 10px;
        background-color: #f2f3f8;
        resize: none;
        outline: none;
        font-size: 14px;
    }
`;

export const loadingLayout = css`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #00000033;
`;