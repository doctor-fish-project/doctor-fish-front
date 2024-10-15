import React from 'react';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListHeader from '../../../components/admincomponents/adminList/AdminListHeader/AdminListHeader';
import AdminListBody from '../../../components/admincomponents/adminList/AdminListBody/AdminListBody';
import { REVIEW_MANAGEMENT } from '../../../constants/admin/Management';
import AdminListTable from '../../../components/admincomponents/adminList/AdminListTable/AdminListTable';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import { useLocation } from 'react-router-dom';
import AdminModalLayout from '../../../components/admincomponents/adminModal/AdminModalLayout/AdminModalLayout';

function AdminReviewPage(props) {
    const location = useLocation();

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"리뷰 및 댓글관리"}>
                    <AdminListTable>
                        <AdminListHeader manageList={REVIEW_MANAGEMENT} />
                        <AdminListBody isShow={true}/>
                    </AdminListTable>
                    <AdminListPagination location={location} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReviewPage;