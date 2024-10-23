import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageLayout from '../../../components/admincomponents/AdminPageLayout/AdminPageLayout';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { adminInstance } from '../../../apis/utils/instance';

function AdminLeaveListPage(props) {
    const location = useLocation();

    const leaveListAllTableHeaders = useQuery(
        ["leaveListAllTableHeadersQuery"],
        async () => await adminInstance.get(`/tableheader?pathName=${location.pathname}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const leaves = useQuery(
        ["leavesQuery"],
        async () => await adminInstance.get(`/admin/leave/list/info`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    console.log(leaves.data)

    return (
        <AdminContainer>
            <AdminPageLayout title={"연차 관리"}>
                <AdminTableLayout>
                    <AdminTableHeader tableheaders={leaveListAllTableHeaders?.data?.data} />
                    <tbody css={s.body}>
                        {
                            leaves?.data?.data?.leaves?.map((leave, idx) =>
                                <tr key={leave.id}>
                                    <td>{idx + 1}</td>
                                    <td>{leave?.userName}</td>
                                    <td>{leave?.registerDate.slice(0, 16).replace("T", "-")}</td>
                                    <td>{leave?.leaveDate.slice(0, 16).replace("T", "-")}</td>
                                    <td>{leave?.endDate.slice(0, 16).replace("T", "-")}</td>
                                    <td>{leave?.reason}</td>
                                    <td>
                                        {
                                            leave.status === 1 ? "진행 중"
                                                : leave.status === 2 ? "완료" : "취소"
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </AdminTableLayout>
            </AdminPageLayout>
        </AdminContainer>
    );
}

export default AdminLeaveListPage;