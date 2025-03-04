import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 0px 60px 0px;
    width: 100%;
    height: 100%;
    background: white;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const footer = css`
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    box-shadow: 0px 0px 2px #dbdbdb;
`;

export const menuButton = (isSelected) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    font-size: 12px;
    color: ${isSelected ? "black" : "gray"};
    & svg {
        font-size: 24px;
        color: ${isSelected ? "black" : "gray"};
    }
`;