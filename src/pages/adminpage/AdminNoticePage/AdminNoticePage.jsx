import React from 'react';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import { useLocation } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import AdminTableBody from '../../../components/admincomponents/adminList/AdminTableBody/AdminTableBody';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function AdminNoticePage(props) {
    const location = useLocation();

    const notice = useQuery(
        ["noticeTalbeHeaderQuery"],
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
                <AdminPageContainer title={"공지사항"}>
                    <AdminTableLayout>
                        <AdminTableHeader tableheaders={notice?.data?.data} />
                        <AdminTableBody />
                    </AdminTableLayout>
                    <AdminListPagination location={location} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminNoticePage;