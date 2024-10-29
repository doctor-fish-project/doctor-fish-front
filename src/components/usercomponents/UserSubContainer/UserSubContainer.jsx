import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import ReservationCalendarModal from '../userModal/ReservationCalendarModal/ReservationCalendarModal';
import ReservationDetail from '../userModal/ReservationDetail/ReservationDetail';
import { IoHomeOutline, IoTimeOutline, IoClipboardOutline, IoCalendarNumberOutline } from "react-icons/io5";

function UserSubContainer({ children }) {
    const nav = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    const menus = [
        {
            id: 1,
            name: "홈",
            path: "/dashboard",
            icon: <IoHomeOutline />
        },
        {
            id: 2,
            name: "예약 하기",
            path: "/reservation",
            icon: <IoTimeOutline />
        },
        {
            id: 3,
            name: "예약 조회",
            path: "/reservationlist",
            icon: <IoCalendarNumberOutline />
        },
        {
            id: 4,
            name: "리뷰",
            path: "/review",
            icon: <IoClipboardOutline />
        },
    ]
    const [reservationModalElement, serReservationModalElement] = useState(<></>);
    const [reservationDetailModalElement, setReservationDetailModalElement] = useState(<></>)

    const containerRef = useRef();

    useEffect(() => {
        if (!!containerRef) {
            serReservationModalElement(<ReservationCalendarModal containerRef={containerRef} />)
            setReservationDetailModalElement(<ReservationDetail containerRef={containerRef} />)
        }
    }, [containerRef])

    const handleMenuOnClick = (path) => {
        nav(path, { replace: true });
    }

    return (
        <div css={s.layout} ref={containerRef}>
            {reservationModalElement}
            {reservationDetailModalElement}
            {children}
            <div css={s.footer}>
                {
                    menus.map(menu => <button key={menu.id} css={s.menuButton(pathname.indexOf("/", 1) !== -1 ? pathname.substring(0, pathname.indexOf("/", 1)) === menu.path : pathname === menu.path)} onClick={() => handleMenuOnClick(menu.path)}>{menu.icon}{menu.name}</button>)
                }
            </div>
        </div>
    );
}

export default UserSubContainer;