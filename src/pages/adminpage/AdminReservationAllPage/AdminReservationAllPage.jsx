import React from 'react';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import { useLocation } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import AdminTableBody from '../../../components/admincomponents/adminList/AdminTableBody/AdminTableBody';
import { useRecoilValue } from 'recoil';
import { categoryIdAtom } from '../../../atoms/adminAtoms';
import { instance } from '../../../apis/utils/instance';
import { useQuery } from 'react-query';

function AdminReservationAllPage(props) {
    const location = useLocation();

    const categoryId = useRecoilValue(categoryIdAtom)

    const reservationAll = useQuery(
        ["reservationAllQuery", categoryId],
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
                <AdminPageContainer title={"전체예약"}>
                    <AdminTableLayout>
                        <AdminTableHeader tableheaders={reservationAll?.data?.data} />
                        <AdminTableBody />
                    </AdminTableLayout>
                    <AdminListPagination location={location} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReservationAllPage;