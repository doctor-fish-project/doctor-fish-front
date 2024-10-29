import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 0px 20px;
    width: 100%;
    min-height: 30px;

    & > p {
        box-sizing: border-box;
        width: fit-content;
        height: 100%;
        font-size: 18px;
        font-weight: 600;
    }
`;

export const iconBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100%;

    & > svg {
        font-size: 25px;
        cursor: pointer;
    }
`;

export const togleBox = (isLatest, togleState) => css`
    position: absolute;
    top: 25px;
    right: 1px;
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 65px;
    height: 50px;
    opacity: ${togleState ? '1' : '0'};
    transform: ${togleState ? 'translateY(5px)' : 'translateY(-10px)'};
    transition: all 0.5s ease;

    & > p {
        cursor: pointer;        
    }

    & > p:nth-of-type(1) {
        margin-bottom: 1px;
        font-weight: ${isLatest ? "600" : "0"};
    }

    & > p:nth-of-type(2) {
        font-weight: ${!isLatest ? "600" : "0"};
    }
`;