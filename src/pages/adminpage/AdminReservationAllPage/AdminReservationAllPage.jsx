import React from 'react';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListHeader from '../../../components/admincomponents/adminList/AdminListHeader/AdminListHeader';
import AdminListBody from '../../../components/admincomponents/adminList/AdminListBody/AdminListBody';
import { RESERVATION_MANAGEMENT } from '../../../constants/admin/Management';
import AdminListTable from '../../../components/admincomponents/adminList/AdminListTable/AdminListTable';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import { useLocation } from 'react-router-dom';

function AdminReservationAllPage(props) {
    const location = useLocation();

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"전체예약"}>
                    <AdminListTable>
                        <AdminListHeader manageList={RESERVATION_MANAGEMENT} />
                        <AdminListBody />
                    </AdminListTable>
                    <AdminListPagination location={location} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReservationAllPage;