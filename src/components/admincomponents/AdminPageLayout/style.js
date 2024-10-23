import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 30px;
    width: 100%;
    height: 100%;
    background-color: white;
    overflow-y: hidden;

    & > button {
        position: absolute;
        box-sizing: border-box;
        border: 1px solid #52b6c6;
        border-radius: 10px;
        right: 60px;
        bottom: 67px;
        font-size: 14px;
        color: #52b6c6;
        
        :hover {
            background-color: #52b6c510;
        }
        :active {
            background-color: #52b6c530;
        }
    }
`;

export const titleAndInput = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 100%;
    height: 40px;
    font-size: 18px;

    & > div {
        box-sizing: border-box;
        display: flex;

        & p:nth-of-type(1) {
            margin-right: 10px;
        }

        & p:nth-of-type(2) {
            margin-top: 5px;
            font-size: 14px;
        }

       
    }

    & > input {
        box-sizing: border-box;
        border-radius: 10px;
        padding: 0px 60px 0px 24px;
        width: 330px;
        height: 100%;
        background-color: #f2f3f8;
    }

    & > button {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(-50%);
        top: 50%;
        right: 13px;
        font-size: 20px;
        cursor: pointer;
    }


`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 110px;

    & > button {
        box-sizing: border-box;
        border: 1px solid #52b6c6;
        border-radius: 10px;
        font-size: 16px;
        color: #52b6c6;
    }
`;

export const editButtonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > button {
        box-sizing: border-box;
        border: 1px solid #52b6c6;
        border-radius: 10px;
        font-size: 16px;
        color: #52b6c6;
    }
`