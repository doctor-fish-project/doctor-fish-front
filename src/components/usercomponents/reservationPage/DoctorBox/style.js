import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 5px 10px 5px 5px;
    background-color: white;
    width: 100%;
    height: 80px;
    
    & > button {
        box-sizing: border-box;
        border-radius: 10px;
        padding: 10px;
        color: #4B61AA;;
    }
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
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

    & div:nth-of-type(1) {
        font-size: 18px;
    }

    & div:nth-of-type(2) {
        color: #777777;
    }
`;