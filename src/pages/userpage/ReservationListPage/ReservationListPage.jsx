import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import { IoFilterOutline } from "react-icons/io5";
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import { useRecoilValue } from 'recoil';
import { reservationDetailModalAtom, reservationModalAtom } from '../../../atoms/modalAtoms';
import ReservationBox from '../../../components/usercomponents/reservationListPage/ReservationBox/ReservationBox';

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
                const totalPageCount = lastPage.data.totalCount % limit === 0
                    ? lastPage.data.totalCount / limit
                    : Math.floor(lastPage.data.totalCount / limit) + 1;

                return totalPageCount !== allPage.length ? allPage.length + 1 : null;
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


    return (
        <UserSubContainer>
            <DashBoardTopBar title={"예약조회"} icon={<IoFilterOutline />} />
            <div css={s.layout} ref={loadMoreRef}>
                {
                     reservationList?.data?.pages?.map(page => page?.data?.reservations?.map(reservation => 
                        <ReservationBox key={reservation.id} reservation={reservation} />
                    ))
                }
            </div>
        </UserSubContainer>

    );
}

export default ReservationListPage;