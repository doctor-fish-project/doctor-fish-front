import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { alarmStateAtom } from '../../../../atoms/dashboardAtoms';


function DashBoardTopBar({ title, icon, onClick, toggleState, isLatest, latestOnClick, longestOnClick }) {
    const location = useLocation();

    const alarmState  = useRecoilValue(alarmStateAtom);

    return (
        <div css={s.layout}>
            <p>{title}</p>
            {
                location.pathname === "/dashboard" ?
                    <div css={s.dashboardIconBox(alarmState)} onClick={onClick}>
                        {icon}
                    </div> :
                    <div css={s.iconBox} onClick={onClick}>
                        {icon}
                    </div>
            }
            {
                location.pathname === "/reservationlist" &&
                <div css={s.togleBox(isLatest, toggleState)}>
                    <p onClick={latestOnClick}>최신순</p>
                    <p onClick={longestOnClick}>오래된 순</p>
                </div>
            }
        </div>
    );
}

export default DashBoardTopBar;