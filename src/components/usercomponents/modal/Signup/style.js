import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    & > p {
        margin-bottom: 5px;
        font-size: 30px;
        font-weight: 600;
    }
`;

export const cancelButtonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    padding: 5px 10px;
    width: 100%;

    & svg {
        font-size: 35px;
    }
`;

export const logoBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
    height: 30px;
`;

export const inputBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90px;

    & input {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        margin-top: 5px;
        padding: 0px 10px;
        width: 100%;
        height: 40px;
        font-size: 18px;
        background-color: #efefef;
        outline: none;
        font-weight: 600;
        
        ::placeholder {
            font-size: 15px;
            font-weight: 600;
        }

        & + p {
            box-sizing: border-box;
            display: flex;
            justify-content: end;
            margin-bottom: 3px;
            font-size: 12px;
            width: 100%;
            color: red;
        }
    }
`;

export const submitButtonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 20px;
    width: 90%;
    
    & button {
        box-sizing: border-box;
        border-radius: 10px;
        width: 100%;
        height: 40px;
        font-size: 20px;
        background-color: #2E5984;
        color: white;
    }
`;