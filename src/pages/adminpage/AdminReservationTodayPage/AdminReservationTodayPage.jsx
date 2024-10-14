import React from 'react';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListHeader from '../../../components/admincomponents/adminList/AdminListHeader/AdminListHeader';
import AdminListBody from '../../../components/admincomponents/adminList/AdminListBody/AdminListBody';
import { RESERVATION_MANAGEMENT } from '../../../constants/admin/Management';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import AdminListTable from '../../../components/admincomponents/adminList/AdminListTable/AdminListTable';
import { useLocation } from 'react-router-dom';

function AdminReservationTodayPage(props) {
    const location = useLocation();

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"당일예약"}>
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

export default AdminReservationTodayPage;