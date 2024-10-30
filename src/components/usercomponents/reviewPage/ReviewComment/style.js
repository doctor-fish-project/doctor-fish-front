import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;

    & > div:nth-of-type(1) {
        padding-bottom: 10px;
    }
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px 0 auto;
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

export const commentContainer = css`
    box-sizing: border-box;
    display: flex;
    margin-bottom: 10px;
    border-bottom: 1px solid #dbdbdb;
    width: 275px;
`;

export const commentBox = css`
    position: relative;
    box-sizing: border-box;
    padding: 0px 20px 30px 0px;
    width: 100%;
    cursor: default;
    word-wrap: break-word;
    overflow: hidden;

    & span:nth-of-type(1) {
        display: inline-block;
        font-weight: 600;
        width: 100%;
    }

    & span:nth-of-type(2) {
        font-size: 14px;    
    }
`;

export const buttonContainer = css`
    position: absolute;
    top: 1px;
    right: 10px;
    box-sizing: border-box;
    display: flex;
    cursor: pointer;
`

export const buttonBox = (toggleState) => css`
    position: absolute;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    top: -2px;
    right: 15px;
    opacity: ${toggleState ? '1' : '0'};
    transform: ${toggleState ? 'translateX(-10px)' : 'translateX(-2px)'};
    transition: all 0.5s ease;
    
    & > div {
        box-sizing: border-box;
        & > button {
            padding: 0 10px;
            flex-grow: 1;
            font-size: 13px;
            color: #777777;
            cursor: ${toggleState ? "pointer" : "default"};
        }
    }
`;
