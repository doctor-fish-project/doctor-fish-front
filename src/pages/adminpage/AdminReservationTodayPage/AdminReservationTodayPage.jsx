import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import AdminListPagination from '../../../components/admincomponents/AdminListPagination/AdminListPagination';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';

function AdminReservationTodayPage(props) {
    const nav = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const [reservationId, setReservationId] = useState(0)
    const [totalPageCount, setTotalPageCount] = useState(1);

    const limit = 14;

    useEffect(() => {
        if (!searchParams.get("page")) {
            setSearchParams(searchParams => ({
                ...searchParams,
                page: 1
            }))
        }
    }, [searchParams, setSearchParams])

    const reservationsTodayTableHeaders = useQuery(
        ["reservationTodayTableHeaderQuery"],
        async () => await instance.get(`/tableheader?pathName=${location.pathname}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const reservationToday = useQuery(
        ["reservationTodayQuery", searchParams.get("page")],
        async () => await instance.get(`/reservation/today?page=${searchParams.get("page")}&limit=${limit}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setTotalPageCount(
                    response.data.totalCount % limit === 0
                        ? response.data.totalCount / limit
                        : Math.floor(response.data.totalCount / limit) + 1)
            }
        }
    )

    const checkReservation = useMutation(
        async () => await instance.put(`/reservation/accept/${reservationId}`),
        {
            onSuccess: response => {
                setReservationId(0)
                reservationToday.refetch()
            },
            onError: error => {
                alert("예약 확인 실패")
            }
        }
    )

    const cancelReservation = useMutation(
        async () => await instance.put(`/reservation/cancel/${reservationId}`),
        {
            onSuccess: response => {
                setReservationId(0)
                reservationToday.refetch()
            },
            onError: error => {
                alert("예약 취소 실패")
            }
        }
    )

    const handleCancelOrCheckOnClick = (id) => {
        setReservationId(reservationId === id ? 0 : id)
    }

    const handleCheckOnClick = (e) => {
        e.stopPropagation();
        if (window.confirm("확인 하시겠습니까?")) {
            checkReservation.mutateAsync().catch(() => { })
        }
    }

    const handleCancelOnClick = (e) => {
        e.stopPropagation();
        if (window.confirm("취소 하시겠습니까?")) {
            cancelReservation.mutateAsync().catch(() => { })
        }
    }

    const handlePageOnChange = (e) => {
        nav(`/admin/reservationtoday?page=${e.selected + 1}`);
    }

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"당일예약"}  count={reservationToday?.data?.data?.totalCount}>
                    <AdminTableLayout>
                        <AdminTableHeader tableheaders={reservationsTodayTableHeaders?.data?.data} />
                        <tbody css={s.layout(reservationsTodayTableHeaders?.data?.data?.length)}>
                            {
                                reservationToday?.data?.data?.reservations?.map((reservation, idx) =>
                                    <tr key={reservation.id} >
                                        <td>{idx + 1}</td>
                                        <td>{reservation?.registerDate.slice(0, 10)}</td>
                                        <td>{reservation?.user?.name}</td>
                                        <td>{reservation?.user?.phoneNumber}</td>
                                        <td>{reservation?.reservationDate.slice(0, 10)}</td>
                                        {
                                            reservationId === reservation.id ?
                                                <td onClick={() => handleCancelOrCheckOnClick(reservation.id)}>
                                                    {
                                                        reservation.status === 2 ? <></> : <button onClick={(e) => handleCheckOnClick(e)}>예약 확인</button>
                                                    }
                                                    {
                                                        reservation.statis === 3 ? <></> : <button onClick={(e) => handleCancelOnClick(e)}>예약 취소</button>
                                                    }
                                                </td>
                                                :
                                                <td onClick={() => handleCancelOrCheckOnClick(reservation.id)}>
                                                    {
                                                        reservation.status === 1 ? "예약 진행 중"
                                                            : reservation.status === 2 ? "예약 완료"
                                                                : "예약 취소"
                                                    }
                                                </td>
                                        }
                                    </tr>
                                )
                            }
                        </tbody>
                    </AdminTableLayout>
                    <AdminListPagination searchParams={searchParams} count={totalPageCount} onChange={handlePageOnChange} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReservationTodayPage;