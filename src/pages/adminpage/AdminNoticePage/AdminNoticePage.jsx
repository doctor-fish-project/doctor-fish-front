import React from 'react';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';

function AdminNoticePage(props) {
    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"공지사항"}>

                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminNoticePage;