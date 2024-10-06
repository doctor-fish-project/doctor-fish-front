import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 80px;
    cursor: pointer;
    box-shadow: 0px 0px 3px #dbdbdb;

    :active {
        box-shadow: inset 0px 0px 3px #dbdbdb;
    }

    :not(:nth-last-of-type(1)) {
        margin-bottom: 10px;
    }
`

export const titleAndDate = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const nameAndLike = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: color;
    align-items: center;
    padding-left: 10px;
    font-weight: 600;

    & svg {
        margin-right: 3px;
        transform: translateY(3px);
        font-size: 18px;
    }
`;