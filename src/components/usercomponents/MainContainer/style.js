import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 45px;
    height: 100%;
    background-color: #efefef;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;