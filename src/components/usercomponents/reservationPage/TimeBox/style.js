import { css } from "@emotion/react";

export const layout = (time, reservationTime) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 9.5px;
    border-radius: 10px;
    width: 23%;
    height: 50px;
    background-color: ${time === reservationTime ? "#bbbbbb" : "#dbdbdb" };
    cursor: pointer;

    :active {
        color: #000000;
        background-color: #bbbbbb;

    }
`;
