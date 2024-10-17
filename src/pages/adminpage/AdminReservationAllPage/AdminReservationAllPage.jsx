import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import { instance } from '../../../apis/utils/instance';
import { useMutation, useQuery } from 'react-query';

function AdminReservationAllPage(props) {
    const nav = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const [reservationId, setReservationId] = useState(0)
    const [totalPageCount, setTotalPageCount] = useState(1);

    const limit = 15;

    useEffect(() => {
        if(!searchParams.get("page")) {
            setSearchParams(searchParams => ({
                ...searchParams,
                page: 1
            }))
        }
    }, [])

    const reservationAllTableHeaders = useQuery(
        ["reservationAllTableHeaderQuery"],
        async () => await instance.get(`/tableheader?pathName=${location.pathname}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const reservations = useQuery(
        ["reservationAllQuery", searchParams.get("page")],
        async () => await instance.get(`/reservation/all?page=${searchParams.get("page")}&limit=${limit}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log(response.data)
                setTotalPageCount(
                    response.data.totalCount % limit === 0
                        ? response.data.totalCount / limit
                        : Math.floor(response.data.totalCount / limit) + 1)
            }
        }
    )

    const handlePageOnChange = (e) => {
        nav(`/admin/reservation?page=${e.selected + 1}`);
    }

    const checkReservation = useMutation(
        async () => await instance.put(`/reservation/accept/${reservationId}`),
        {
            onSuccess: response => {
                setReservationId(0)
                reservations.refetch()
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
                reservations.refetch()
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

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"전체예약"} count={reservations?.data?.data?.totalCount}>
                    <AdminTableLayout>
                        <AdminTableHeader tableheaders={reservationAllTableHeaders?.data?.data} />
                        <tbody css={s.layout(reservationAllTableHeaders?.data?.data?.length)}>
                            {
                                reservations?.data?.data?.reservations?.map((reservation, idx) =>
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

export default AdminReservationAllPage;