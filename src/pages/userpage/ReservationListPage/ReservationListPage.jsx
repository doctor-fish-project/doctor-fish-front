import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';
import YearBox from '../../../components/usercomponents/reservationListPage/YearBox/YearBox';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useQuery } from 'react-query';

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

            },
            onError: error => {
                console.log("정보 조회 실패")
            }
        }

    )

    // useEffect(() => {
    //     const tempCalendarData = {};

    //     for(let reservation of reservationList.data) {
    //         const dateTime = reservation.Date;
    //         const year = dateTime.slice(0,4);
    //         const month = dateTime.slice(5,7); 
    //         const date = dateTime.slice(0, 10); 

    //         if(!tempCalendarData[year]) {
    //             tempCalendarData[year] = {}
    //         }
    //         if(!tempCalendarData[year][month]) {
    //             tempCalendarData[year][month] = {}
    //         }
    //         if(!tempCalendarData[year][month][date]) {
    //             tempCalendarData[year][month][date] = []
    //         }

    //         tempReservationDate[year][month][date].push(todo);
    //     }
    //     setReservations(tempReservationDate);
    // }, [reservationList.data])

    const entriesOfReservationsData = Object.entries(reservations);
    console.log(reservations);
    return (
        <MainLayout>
            <SubContainer>
                <DashBoardTopBar title={"예약조회"} />
                <div css={s.layout}>
                    {/* {
                        entriesOfReservationsData?.map(([year, monthOfReservationsData]) =>
                            <YearBox key={year} year={year} monthOfReservationsData={monthOfReservationsData} />)
                    } */}
                    <YearBox year={2024} />
                    <YearBox year={2025} />
                </div>
            </SubContainer>
        </MainLayout>

    );
}

export default ReservationListPage;