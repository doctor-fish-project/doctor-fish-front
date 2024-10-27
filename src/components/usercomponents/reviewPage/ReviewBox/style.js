import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 15px;
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
    width: 100%;
    font-size: 20px;
    font-weight: 600;

    & p:nth-of-type(1) {
        width: 230px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    & p:nth-of-type(2) {
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
    width: 40px;
    height: 40px;

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
    border-radius: 10px;
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
    width: 100%;
    height: 50px;

    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 3px;
        width: 100%;
        height: 50%;

        & > p {
            box-sizing: border-box;
            width: fit-content;
            height: 100%;

            & > svg {
                transform: translateY(1px);
                width: 20px;
                cursor: pointer;
            }
        }

    }
    
    & > p {
        box-sizing: border-box;
        padding: 0px 3px;
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
    padding-left: 10px;
    width: 100%;
`;