import { css } from "@emotion/react";

export const layout = (reservationTime, time) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 85px;
    height: 50px;
    font-size: 14px;
    font-weight: 600;
    color: ${time === reservationTime ? '#ffffff' : '#000000'};
    background-color: ${time === reservationTime ? '#2E5984' : '#dbdbdb'};
    cursor: pointer;

    :active {
        color: #ffffff;
        background-color: #2E5984;
    }

    :disabled {
        color: gray;
        background-color: #eeeeee;
    }
`;
