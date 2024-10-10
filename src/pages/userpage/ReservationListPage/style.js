import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 668px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;