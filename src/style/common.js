import { css } from "@emotion/react";

export const reset = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
    * {
        font-family: "Noto Sans KR", sans-serif;
    }
    
    html, body, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    
    h1, h2, h3, ul, p {
        margin: 0;
        padding: 0;
        cursor: default;
    }

    td, th {
        padding: 0;
    }

    input {
        border: none;
        outline: none;
    }

    button {
        border: none;
        padding: 0;
        color: #000000;
        background-color: transparent;
        outline: none;
        font-weight: 500;
        cursor: pointer;
    }

    button:active {
        color: #eeeeee;
        background-color: transparent;
    }

    button:disabled {
        color: #eeeeee;
        background-color: transparent;
        cursor: default;
    }

    .container {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px auto;
        border: none;
        border-radius: 40px;
        padding: 0px;
        width: 375px;
        height: 812px;
    }

    .custom-confirm-swal {
        padding: 10px;
        border-radius: 10px;
        width: 300px;
        height: 200px;
       
        & > div {
            margin: 0px auto;
            padding: 0px;
            font-size: 14px;
            height: fit-content;

            :where(.swal2-icon).swal2-info {
                border-color: #2E5984;
                color: #2E5984;
            }
        }

        & > h2 {
            padding: 0px;
            font-size: 14px;
        }
    }

    .custom-timer-swal {
        padding: 10px;
        border-radius: 10px;
        width: 300px;
        height: fit-content;

        & > div { 
            margin: auto;
            margin-bottom: 5px;
            padding: 0px;
            overflow: hidden;
            font-size: 14px;
            font-weight: 600;
        };
    }

    .custom-loading-swal {
        padding: 10px;
        border-radius: 10px;
        width: 150px;
        height: fit-content;
        box-shadow: none;

        & > div { 
            margin: auto;
            margin-bottom: 5px;
            padding: 0px;
            overflow: hidden;
        };
    }

    .confirmButton {
        color: #ffffff;
        background-color: #2E5984;
    }

    @keyframes userModalOpen {
        from {
            inset: auto 0px -650px;
        }
        to {
            inset: auto 0px 0px;
        }
    }

    @keyframes userModalClose {
        from {
            inset: auto 0px 0px;
        }
        to {
            inset: auto 0px -650px;
        }
    }
`;