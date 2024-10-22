import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const nameContainer = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
    font-size: 18px;

    & p:nth-of-type(1) {
        font-weight: 600;
        margin-right: 5px;
        font-size: 20px;
        color: #52b6c6;
    }
`;

export const infoContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
    width: 100%;
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    & > button {
        box-sizing: border-box;
        flex-grow: 1;
        font-size: 20px;
        font-weight: 600;
        padding: 10px 10px;
        /* width: 100%; */
        background-color: #2E5984;
        color: white;

        :nth-last-of-type(1) {
            background-color: #c5c5c5;
            color: #777777;
        }
    }
`;

export const doctorContainer = css`
    box-sizing: border-box;
    display: flex;
    margin-bottom: 40px;
    width: 100%;
`;

export const doctorImgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 40px;
    border-radius: 50%;
    box-shadow: 0px 0px 2px #00000088;
    width: 80px;
    height: 80px;
    overflow: hidden;

    & > img {
        box-sizing: border-box;
        height: 100%;
    }
`;

export const doctorInfoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
`;

export const doctorIntroduceBox = css`
    box-sizing: border-box;
    display: flex;
    margin-bottom: 40px;
`;

export const timeBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-size: 22px;
    font-weight: 900;
    color: #52b6c6;
`;

export const timeLimitBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    flex-grow: 1;
    border-radius: 10px;
    background-color: #f2f3f8;

    & p {
        font-size: 18px;
        font-weight: 400;
        color: #c5c5c5;
    }
`;