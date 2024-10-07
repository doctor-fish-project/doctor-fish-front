import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 45px;
    height: 100%;
    background-color: #ffffff;
    overflow: auto;
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
    border: 1px solid #dbdbdb;
    width: 100%;
    height: 60px;
    box-shadow: 3px 0px 5px #dbdbdb;

`;