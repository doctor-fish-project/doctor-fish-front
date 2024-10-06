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
    box-shadow: 3px 0px 3px #dbdbdb;

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

    .react-calendar__tile.react-calendar__tile--now.react-calendar__month-view__days__day {
        background-color: #1E3A5F;
        color: #ffffff;
    }

    .react-calendar__tile.react-calendar__tile--now.react-calendar__month-view__days__day:enabled:hover {
        background-color: #dbdbdb;
        color: #000000;
    }

    .react-calendar__tile.react-calendar__tile--now.react-calendar__month-view__days__day:focus:hover {
        background-color: #1E3A5F;
        color: #ffffff;
    }

    .react-calendar__tile.react-calendar__tile--now.react-calendar__month-view__days__day:enabled:active {
        background-color: #1E3A5F;
        color: #ffffff;
    }

    .react-calendar__tile.react-calendar__tile--now.react-calendar__month-view__days__day:not(.react-calendar__tile--active) {
        background-color: transparent;
        color: #000000;
    }

    .react-calendar__tile--now.react-calendar__tile--active {
        background-color: #1E3A5F;
        color: #ffffff;
    }

    .react-calendar__tile:hover {
        background-color: #dbdbdb;  
    }

    .react-calendar__tile:focus {
        color: #ffffff;
        background-color: #1E3A5F;        
    }
`;

export const doctorContainer = css`
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 10px;
    padding: 0px 5px;
    width: 100%;
    height: 120px;
    box-shadow: 3px 0px 3px #dbdbdb;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    & div:not(:nth-last-of-type(1)) {
        margin-right: 5px;
    }
`;

export const timeContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #dbdbdb;
    padding: 5px;
    width: 100%;
    box-shadow: 3px 0px 3px #dbdbdb;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    & button:not(:nth-of-type(4n)) {
        margin-right: 9.5px;
    }
`;

export const buttonBox = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: end;
    align-items: center;
    padding-bottom: 62px;

    & button {
        width: 100%;
        height: 50px;
        background-color: #dbdbdb;
    }
`;