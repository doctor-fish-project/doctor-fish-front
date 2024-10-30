import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 100%;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    & > p {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background-color: #f1f0f3;
        
    }

    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        padding: 0px 10px;
        width: 100%;
        min-height: 60px;
        text-align: center;
        background-color: #f1f0f3;

        & > pre {
            margin: 0;
        }
    }

    & > div:not(:nth-last-of-type(1)) {
        margin-bottom: 10px;
    }
`;