import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import { useLocation } from 'react-router-dom';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import AdminTableBody from '../../../components/admincomponents/adminList/AdminTableBody/AdminTableBody';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import { instance } from '../../../apis/utils/instance';
import { useQuery } from 'react-query';

function AdminUsersPage(props) {
    const location = useLocation();

    const users = useQuery(
        ["usersQuery"],
        async () => await instance.get(`/tableheader?pathName=${location.pathname}`),
        {   
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0    
        }
    )

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"회원관리"}>
                    <AdminTableLayout>
                        <AdminTableHeader tableheaders={users?.data?.data} />
                        <AdminTableBody />
                    </AdminTableLayout>
                    <AdminListPagination location={location}/>
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminUsersPage;