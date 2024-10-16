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
import AdminTableBody from '../../../components/admincomponents/adminList/AdminTableBody/AdminTableBody';
import { categoryIdAtom } from '../../../atoms/adminAtoms';
import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function AdminReservationTodayPage(props) {
    const location = useLocation();

    const categoryId = useRecoilValue(categoryIdAtom)

    const reservationToday = useQuery(
        ["reservationTodayQuery", categoryId],
        async () => await instance.get("/tableheader", {
            params: {
                categoryId
            }
        }),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"당일예약"}>
                    <AdminTableLayout>
                        <thead css={s.headLayout}>
                            <tr>
                                <th>1</th>
                                <th>1254</th>
                                <th>125</th>
                                <th>125</th>
                                <th>125</th>
                            </tr>
                        </thead>
                        <tbody css={s.bodyLayout}>
                            <tr>
                                <td>1</td>
                                <td>215</td>
                                <td>125</td>
                                <td>512</td>
                                <td>215</td>
                            </tr>
                        </tbody>
                    </AdminTableLayout>
                    <div css={s.paginationBox}>
                        <AdminListPagination location={location} />
                    </div>
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReservationTodayPage;