import React from 'react';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListTable from '../../../components/admincomponents/adminList/AdminListTable/AdminListTable';
import AdminListHeader from '../../../components/admincomponents/adminList/AdminListHeader/AdminListHeader';
import AdminListBody from '../../../components/admincomponents/adminList/AdminListBody/AdminListBody';
import { NOTICE_MANAGEMENT } from '../../../constants/admin/Management';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import { useLocation } from 'react-router-dom';

function AdminNoticePage(props) {
    const location = useLocation();
    
    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"공지사항"}>
                    <AdminListTable>
                        <AdminListHeader manageList={NOTICE_MANAGEMENT} />
                        <AdminListBody />
                    </AdminListTable>
                    <AdminListPagination location={location} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminNoticePage;