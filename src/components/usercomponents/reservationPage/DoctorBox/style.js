import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 5px 10px 5px 5px;
    width: 100%;
    height: 80px;
    
   

    & > button {
        box-sizing: border-box;
        border-radius: 10px;
        width: 50px;
        height: 40px;
        color: #ffffff;
        background-color: #2E5984;
    }
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    overflow: hidden;

    & > img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const nameAndDepartBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
`;