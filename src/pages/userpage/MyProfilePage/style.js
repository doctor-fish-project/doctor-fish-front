import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 100%;

    & > img {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        width: 100px;
        height: 100px;
        object-fit: contain;
        overflow: hidden;
        cursor: pointer;
    }
`;

export const userInfo = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 5px;
    width: 100%;

    & > p:nth-of-type(1) {
        font-size: 20px;
    }

    & > p:nth-of-type(2) {
        font-size: 18px;
        color: #777777;
    }
`;

export const userButtonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
`;

// export const userModify = css`
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 100px;
//     width: 100%;

//     & > div {
//         box-sizing: border-box;
//         display: flex;
//         height: 50px;

//         & > button {
//             box-sizing: border-box;
//             flex-grow: 1;
//             border: 1px solid #dbdbdb;
//             border-radius: 10px;
//             padding: 10px 10px;
//         }
//     }
// `;

export const userRecord = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;

    & > div {
        box-sizing: border-box;
        display: flex;
        height: 50px;

        & > button {
            box-sizing: border-box;
            flex-grow: 1;
            border: 1px solid #dbdbdb;
            padding: 10px 10px;
        }
    }

    & div:nth-of-type(1) {
        margin-bottom: 70px;
    }

    & > div:nth-of-type(1) > button:nth-of-type(1) {
        border-radius: 10px;
    }

    & > div:nth-of-type(2) > button:nth-of-type(1) {
        border-bottom: none;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    & > div:nth-of-type(3) > button:nth-of-type(1) {
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`

export const logoutBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;

    & > div {
        box-sizing: border-box;
        display: flex;
        height: 50px;

        & > button {
            box-sizing: border-box;
            flex-grow: 1;
            border: 1px solid #dbdbdb;
            padding: 10px 10px;
        }
    }
    
    & > div:nth-of-type(1) > button:nth-of-type(1) {
        border-bottom: none;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        color: red;
        
    }
    & > div:nth-of-type(2) > button:nth-of-type(1) {
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        color: #777777;
    }

`;