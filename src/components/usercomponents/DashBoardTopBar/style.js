import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const topBar = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    /* border-bottom: 2px solid #dbdbdb; */
    width: 100%;
    height: 8%;
    z-index: 99;
`;

export const logoBox = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    width: 100%;
    height: 100%;
    
    & h3 {
        font-size: 20px;
        color: black;
    }
`;

export const iconBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    width: 100%;
    height: 100%;
    
    & svg {
        font-size: 25px;
        cursor: pointer;
    }
`;