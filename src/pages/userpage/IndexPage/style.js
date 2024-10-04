import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 0px 0px 0px 20%;
    background: linear-gradient(137deg, rgba(255,115,115,1) 0%, rgba(115,166,255,1) 100%);
    width: 100%;
    height: 70%;
`;

export const titleBox = css`
    display: flex;
    padding-left: 50px;
    & h1 {
        font-size: 30px;
        color: white;
    }
`;

export const contentBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & p {
        font-size: 30px;
        color: white;
    }
`;

export const buttonBox = css`
    position: relative;
    display: flex;
    margin-left: 20px;
    width: 80%;
    height: 40px;
    background-color: #FFFFFF;
    border-radius: 10px;
    & button {
        font-size: 23px;
        font-weight: 600;
        width: 100%;
        height: 100%;
    }
    & svg {
        position: absolute;
        top: 5px;
        left: 20px;
        width: 30px;
        height: 30px;
    }
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    & img {
        width: 250px;
        height: 100px;
    }
`;

export const loginContainer = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30%;
`;

export const loginTitle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;
`;

export const loginButtonBox = css`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50%;
    & button {
        border-radius: 50%;
        background: linear-gradient(137deg, rgba(255,115,115,1) 0%, rgba(115,166,255,1) 100%);
        width: 80px;                                                                
        height: 80px;
        color: white;
    }
`;