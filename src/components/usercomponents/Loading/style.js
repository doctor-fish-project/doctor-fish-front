import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(137deg, rgba(255,115,115,1) 0%, rgba(115,166,255,1) 100%);
    width: 100%;
    height: 100%;
`;

export const titleContainer = css`
    display: flex;
    justify-content: center;
    width: 100%;
    & span {
        font-size: 30px;
        color: white;
    }
`;

export const imgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    & img {
        background: none;
        width: 200px;
        height: 200px;
    }
`;

export const downContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    & h2 {
        font-size: 30px;
        color: white;
    }
`;