import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    width: 100%;
    background-color: white;
    cursor: pointer;

    :not(:nth-last-of-type(1)) {
        margin-bottom: 10px;
    }
`

export const nameBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 15px 15px 0;
    width: 100%;
    font-size: 20px;
    font-weight: 600;

    & > p {
        font-size: 18px;
        width: fit-content;
    }
`;

export const profileBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 50%;
    box-shadow: 0px 0px 2px #00000088;
    width: 30px;
    height: 30px;

    cursor: pointer;
    overflow: hidden;

    & > img {
        box-sizing: border-box;
        height: 100%;
    }
`;

export const imgBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-left: none;
    border-right: none;
    width: 100%;
    height: 300px;
    overflow: hidden;

    & img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const preButton = css`
    position: absolute;
    top: 50%;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        font-size: 20px;
        color: gray;
    }
`;

export const nextButton = css`
    position: absolute;
    top: 50%;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        font-size: 20px;
        color: gray;
    }
`;

export const dateAndLike = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 15px 0;
    width: 100%;

    & > div {
        position: relative;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50%;

        & > p {
            box-sizing: border-box;
            width: fit-content;
            height: 100%;
            margin-bottom: 5px;

            & > svg {
                position: absolute;
                width: 20px;
                top: 1px;
                cursor: pointer;
            }
        }

    }
    
    & > p {
        box-sizing: border-box;
        width: 100%;
        height: 50%;
        font-size: 14px;
    }

    
`;

export const contentBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 15px;
    width: 100%;
`;