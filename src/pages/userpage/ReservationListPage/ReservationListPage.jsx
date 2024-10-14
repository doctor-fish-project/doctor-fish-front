import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';
import YearBox from '../../../components/usercomponents/reservationListPage/YearBox/YearBox';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import { IoFilterOutline } from "react-icons/io5";

function ReservationListPage(props) {
    const [reservations, setReservations] = useState({});

    const reservationList = useQuery(
        ["reservationListQuery"],
        async () => {
            return await instance.get("/reservation/list/user");
        },
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                const reservationList = response.data.reservations
                const tempReservationDate = {};

                for (let reservation of reservationList) {
                    const dateTime = reservation.reservationDate;
                    const year = dateTime.slice(0, 4);
                    const month = dateTime.slice(5, 7);
                    const date = dateTime.slice(0, 10);

                    if (!tempReservationDate[year]) {
                        tempReservationDate[year] = {}
                    }
                    if (!tempReservationDate[year][month]) {
                        tempReservationDate[year][month] = {}
                    }
                    if (!tempReservationDate[year][month][date]) {
                        tempReservationDate[year][month][date] = []
                    }

                    tempReservationDate[year][month][date].push(reservation);
                }
                setReservations(tempReservationDate);
            },
            onError: error => {
                
            }
        }
    )

    const entriesOfReservationsData = Object.entries(reservations);
    
    return (
        <MainLayout>
            <SubContainer>
                <DashBoardTopBar title={"예약조회"} icon={<IoFilterOutline />} />
                <div css={s.layout}>
                    {
                        entriesOfReservationsData?.map(([year, monthOfReservationsData]) =>
                            <YearBox key={year} year={year} monthOfReservationsData={monthOfReservationsData} />)
                    }
                </div>
            </SubContainer>
        </MainLayout>

    );
}

export default ReservationListPage;