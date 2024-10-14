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
        background-color: #2E5984;
        color: #ffffff;
    }

    .sunday {
        color: #ff0000;
    }

    .saturday {
        color: #1087ff;
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
        margin-bottom: 10px;
        width: fit-content;
    }

    .react-calendar__navigation__label {
        font-size: 30px;
    }

    .react-calendar__navigation__arrow {
        font-size: 30px;
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
        font-size: 20px;   
    }

    .react-calendar__month-view__weekdays__weekday {
        & * {
            text-decoration: none;
        }
    }

    .react-calendar__month-view__days {
        font-size: 20px;
    }

    .react-calendar__tile--now {
        background-color: #2E5984;
        color: #ffffff;
    }

    .react-calendar__tile--now:enabled:hover {
        background-color: #2E5984;
        color: #ffffff;
    }

    .react-calendar__tile--now:not(.react-calendar__tile--active) {
        background-color: transparent;
        color: #000000;
    }

    .react-calendar__tile--now.react-calendar__tile--active {
        background-color: #2E5984;
        color: #ffffff;
    }

    .react-calendar__tile:hover {
        background-color: #2E5984;
        color: #ffffff;  
    }

    .react-calendar__tile:focus {
        color: #ffffff;
        background-color: #2E5984;        
    }
`;