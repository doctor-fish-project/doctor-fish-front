import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 0px 20px;
    width: 100%;
    min-height: 30px;

    & > p {
        box-sizing: border-box;
        width: fit-content;
        height: 100%;
        font-size: 18px;
        font-weight: 600;
    }
`;

export const dashboardIconBox = (alarmState) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100%;

    & > svg {
        font-size: 25px;
        cursor: pointer;
        animation: ${alarmState && "blink 0.5s steps(2, start) infinite"};
    }

    @keyframes blink {
      0% {
        color: black;
      }
      50% {
        color: #7BC1B7;
      }
      100% {
        color: black
      }
    }
`;

export const iconBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100%;

    & > svg {
        font-size: 25px;
        cursor: pointer;
    }
`;

export const togleBox = (isLatest, togleState) => css`
    position: absolute;
    top: 35px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0px 0px 10px 10px;
    width: 100%;
    background-color: #ffffff;
    opacity: ${togleState ? '1' : '0'};
    transform: ${togleState ? 'translateY(5px)' : 'translateY(-10px)'};
    transition: all 0.5s ease;

    & > p {
        box-sizing: border-box;
        padding: 7px 0px;
        width: 100%;
        text-align: center;
        cursor: pointer;        
    }

    & > p:nth-of-type(1) {
        border-bottom: 1px solid #dbdbdb;
        font-weight: ${isLatest ? "600" : "0"};
    }

    & > p:nth-of-type(2) {
        font-weight: ${!isLatest ? "600" : "0"};
    }
`;