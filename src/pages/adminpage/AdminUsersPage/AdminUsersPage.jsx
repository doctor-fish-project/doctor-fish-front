import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosSearch } from "react-icons/io";
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListHeader from '../../../components/admincomponents/adminList/AdminListHeader/AdminListHeader';
import AdminListBody from '../../../components/admincomponents/adminList/AdminListBody/AdminListBody';
import { USER_MANAGEMENT } from '../../../constants/admin/Management';

function AdminUsersPage(props) {
    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"회원정보"}>
                    <AdminListHeader manageList={USER_MANAGEMENT} />
                    <AdminListBody />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminUsersPage;