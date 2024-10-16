import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import { useLocation } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import { useRecoilValue } from 'recoil';
import { categoryIdAtom } from '../../../atoms/adminAtoms';
import { instance } from '../../../apis/utils/instance';
import { useQuery } from 'react-query';

function AdminReservationAllPage(props) {
    const location = useLocation();
    
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
        ["reservationAllQuery"],
        async () => await instance.get("/reservation/all"),
        {   
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0    
        }
    )

    console.log(reservations)
    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"전체예약"}>
                    <AdminTableLayout>
                        <AdminTableHeader tableheaders={reservationAllTableHeaders?.data?.data} />
                        <tbody css={s.layout(reservationAllTableHeaders?.data?.data?.length)}>
                            {
                                reservations?.data?.data?.reservations?.map(reservation =>
                                    <tr key={reservation.id} >
                                        <td>{reservation?.id}</td>
                                        <td>{reservation?.registerDate.slice(0,10)}</td>
                                        <td>{reservation?.user?.name}</td>
                                        <td>{reservation?.user?.phoneNumber}</td>
                                        <td>{reservation?.reservationDate.slice(0,10)}</td>
                                        <td>
                                        {
                                            reservation.status === 1 ? "예약 진행 중"
                                            : reservation.status === 2 ? "예약 완료"
                                            : "예약 취소"
                                        }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </AdminTableLayout>
                    <AdminListPagination location={location} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReservationAllPage;