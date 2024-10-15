import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 40px;
    width: 100%;
    height: 60px;
    
    & > tr {
        box-sizing: border-box;

        & > td {
            text-align: center;
            width:${1440 / 4}px;
        }

        & > td:nth-of-type(1) {
            width: 40px;
        }
    }
`;

export const modalContainer = css`
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 10px;
    transform: translate(50%, -50%);
    top: 50%;
    left: 25%;
    width: 500px;
    height: 800px;
    z-index: 98;
    background-color: white;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    cursor: pointer;

    :not(:nth-last-of-type(1)) {
        margin-bottom: 10px;
    }
`

export const nameBox = css`
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

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;

    & img {
        box-sizing: border-box;
        height: 100%;
        overflow: hidden;
    }
`;

export const dateAndLike = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & p {
        font-size: 14px;
    }

    & svg {
        margin-right: 3px;
        transform: translateY(3px);
        font-size: 18px;
    }
`;
