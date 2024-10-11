import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    & > button {
        box-sizing: border-box;
        border-radius: 0px;
        width: 100%;
        height: 50px;
        font-size: 20px;
        background-color: #2E5984;
        color: white;
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

export const doctorInfoBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;
    height: 30px;
`;

export const timeBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0px 5px;
    width: 100%;

    & :not(button:nth-of-type(4n)) {
        margin-right: 5px;
    }

    
`;
