import React from 'react';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListHeader from '../../../components/admincomponents/adminList/AdminListHeader/AdminListHeader';
import AdminListBody from '../../../components/admincomponents/adminList/AdminListBody/AdminListBody';
import { RESERVATION_MANAGEMENT } from '../../../constants/admin/Management';

function AdminReservationTodayPage(props) {
    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"당일예약"}>
                    <AdminListHeader manageList={RESERVATION_MANAGEMENT}>
                        <AdminListBody>

                        </AdminListBody>
                    </AdminListHeader>
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReservationTodayPage;