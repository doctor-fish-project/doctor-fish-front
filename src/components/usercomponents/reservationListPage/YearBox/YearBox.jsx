import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import MonthBox from '../MonthBox/MonthBox';

function YearBox({ year, monthGroup }) {
    return (
        <div css={s.layout}>
            <p>{year}</p>
            <MonthBox month={10}/>
        </div>
    );
}

export default YearBox;