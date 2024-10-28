import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import YearBox from '../../../components/usercomponents/reservationListPage/YearBox/YearBox';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import { IoFilterOutline } from "react-icons/io5";
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import { useRecoilValue } from 'recoil';
import { reservationDetailModalAtom, reservationModalAtom } from '../../../atoms/modalAtoms';

function ReservationListPage(props) {
    const loadMoreRef = useRef(null);

    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery");

    const reservationOpen = useRecoilValue(reservationModalAtom);
    const reservationDetailOpen = useRecoilValue(reservationDetailModalAtom);

    const [reservations, setReservations] = useState({});

    const limit = 10;

    const reservationList = useInfiniteQuery(
        ["reservationListQuery", reservationDetailOpen, reservationOpen],
        async ({ pageParam = 1 }) => await instance.get(`/reservation/list?page=${pageParam}&limit=${limit}`),
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage, allPage) => {
                const totalPageCount = lastPage.data.commentCount % limit === 0
                    ? lastPage.data.commentCount / limit
                    : Math.floor(lastPage.data.commentCount / limit) + 1;

                return totalPageCount !== allPage.length ? allPage.length + 1 : null;
            },
            onSuccess: response => {
                const tempReservationDate = {};

                for (let page of response?.pages) {
                    for (let reservation of page?.data?.reservations) {
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

                        setReservations(tempReservationDate)
                    }
                }
            }
        }
    );

    useEffect(() => {
        if (!reservationList.hasNextPage || !loadMoreRef.current || reservationList?.data?.pages[0].data?.reservations?.length < 10) {
            return;
        }

        const observer = new IntersectionObserver(([intersectionObserver]) => {
            if (intersectionObserver.isIntersecting) {
                reservationList.fetchNextPage();
            }
        }, { threshold: 1.0 });

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [reservationList.hasNextPage]);

    const entriesOfReservationsData = Object.entries(reservations);

    return (
        <UserSubContainer>
            <DashBoardTopBar title={"예약조회"} icon={<IoFilterOutline />} />
            <div css={s.layout} ref={loadMoreRef}>
                {
                    entriesOfReservationsData?.map(([year, monthOfReservationsData]) =>
                        <YearBox key={year} year={year} monthOfReservationsData={monthOfReservationsData} />)
                }
            </div>
        </UserSubContainer>

    );
}

export default ReservationListPage;