import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 250px;

    .react-calendar__tile--select {
        background-color: #4B61AA;
        color: #ffffff;
    }

    .sunday {
        color: #ff0000;
    }

    .saturday {
        color: #1087ff;
    }

    .sunday.react-calendar__tile--now:not(.react-calendar__tile--active) {
        color: #ff0000;
    }

    .saturday.react-calendar__tile--now:not(.react-calendar__tile--active) {
        color: #1087ff;
    }

    

    .disabled-date {
        color: #dbdbdb;
    }

    button {
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        background-color: transparent;
        cursor: pointer;
        outline: none;
    }

    .react-calendar {
        display: flex;
        flex-direction: column;
        border: none;
        width: 100%;
    }

    .react-calendar__navigation {
        display: flex;
        align-self: center;
        width: fit-content;
    }

    .react-calendar__navigation__label {
        font-size: 25px;
        font-weight: 600;
    }

    .react-calendar__navigation__arrow {
        font-size: 25px;
    }

    .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
        display: none;
    }

    .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
        display: none;
    }

    .react-calendar__month-view__weekdays {
        align-self: center;
        text-align: center;
        font-size: 18px;
        font-weight: 600;   
    }

    .react-calendar__month-view__weekdays__weekday {
        & * {
            text-decoration: none;
        }
    }

    .react-calendar__tile--now {
        background-color: #4B61AA;
        color: #ffffff;
    }

    .react-calendar__tile--now:not(.react-calendar__tile--active) {
        background-color: transparent;
        color: #000000;
    }

    .react-calendar__tile--now.react-calendar__tile--active {
        background-color: #4B61AA;
        color: #ffffff;
    }

    .react-calendar__tile:focus {
        color: #ffffff;
        background-color: #4B61AA;      
    }
`;