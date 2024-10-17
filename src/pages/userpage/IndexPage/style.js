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
    background: #2E5984;
    width: 100%;
    height: 70%;
`;

export const titleBox = css`
    display: flex;
    padding-left: 25px;
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
    display: flex;
    margin-left: 20px;
    width: fit-content;
    height: 40px;
    background-color: #FFFFFF;
    border-radius: 10px;
    
    & button {
        display: flex;
        align-items: center;
        font-size: 23px;
        font-weight: 600;

        & > svg {
            margin-right: 5px;
            font-size: 30px;
        }
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


export const loginButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;
    & button {
        border-radius: 10px;
        background: #2E5984;
        width: 90%;                                                                
        height: 70px;
        font-size: 25px;
        font-weight: 900;
        color: white;
    }
`;