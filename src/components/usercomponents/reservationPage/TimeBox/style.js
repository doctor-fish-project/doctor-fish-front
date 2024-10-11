import { css } from "@emotion/react";

export const layout = (reservationTime, time) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 87px;
    height: 50px;
    color: ${time === reservationTime ? '#ffffff' : '#000000'};
    background-color: ${time === reservationTime ? '#2E5984' : '#dbdbdb'};
    cursor: pointer;

    :disabled {
        color: gray;
        background-color: #eeeeee;
    }
`;
