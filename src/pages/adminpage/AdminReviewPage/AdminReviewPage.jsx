import React from 'react';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListHeader from '../../../components/admincomponents/adminList/AdminListHeader/AdminListHeader';
import AdminListBody from '../../../components/admincomponents/adminList/AdminListBody/AdminListBody';
import { REVIEW_MANAGEMENT } from '../../../constants/admin/Management';

function AdminReviewPage(props) {
    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"리뷰 및 댓글관리"}>
                    <AdminListHeader manageList={REVIEW_MANAGEMENT}>
                        <AdminListBody>

                        </AdminListBody>
                    </AdminListHeader>
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReviewPage;