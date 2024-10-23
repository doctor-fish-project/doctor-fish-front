import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageLayout from '../../../components/admincomponents/AdminPageLayout/AdminPageLayout';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { adminInstance } from '../../../apis/utils/instance';

function AdminLeaveListPage(props) {
    const location = useLocation();

    const [leaveId, setLeaveId] = useState(0);

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

    const checkLeave = useMutation(
        async () => await adminInstance.put(`/admin/leave/accept/${leaveId}`),
        {
            onSuccess: response => {
                alert("연차 확인 성공")
                setLeaveId(0)
                leaves.refetch()
            },
            onError: error => {
                alert("연차 확인 실패")
            }
        }
    )

    const cancelLeave = useMutation(
        async () => await adminInstance.put(`/admin/leave/cancel/${leaveId}`),
        {
            onSuccess: response => {
                alert("연차 취소 성공")
                setLeaveId(0)
                leaves.refetch()
            },
            onError: error => {
                alert("연차 취소 실패")
            }
        }
    )

    const handleCancelOrCheckOnClick = (id) => {
        setLeaveId(leaveId === id ? 0 : id)
    }

    const handleCheckOnClick = (e) => {
        e.stopPropagation();
        if (window.confirm("확인 하시겠습니까?")) {
            checkLeave.mutateAsync().catch(() => { })
        }
    }

    const handleCancelOnClick = (e) => {
        e.stopPropagation();
        if (window.confirm("취소 하시겠습니까?")) {
            cancelLeave.mutateAsync().catch(() => { })
        }
    }

    return (
        <AdminContainer>
            <AdminPageLayout title={"연차 관리"}>
                <AdminTableLayout>
                    <AdminTableHeader tableheaders={leaveListAllTableHeaders?.data?.data} />
                    <tbody css={s.layout(leaveListAllTableHeaders?.data?.data?.length)}>
                        {
                            leaves?.data?.data?.leaves?.map((leave, idx) =>
                                <tr key={leave.id}>
                                    <td>{idx + 1}</td>
                                    <td>{leave?.userName}</td>
                                    <td>{leave?.registerDate.slice(0, 16).replace("T", "-")}</td>
                                    <td>{leave?.leaveDate.slice(0, 16).replace("T", "-")}</td>
                                    <td>{leave?.endDate.slice(0, 16).replace("T", "-")}</td>
                                    <td>{leave?.reason}</td>
                                    {
                                        leaveId === leave.id ?
                                            <td onClick={() => handleCancelOrCheckOnClick(leave.id)}>
                                                {
                                                    leave.status === 2 ? <></> : <button onClick={(e) => handleCheckOnClick(e)}>연차 확인</button>
                                                }
                                                {
                                                    leave.statis === 3 ? <></> : <button onClick={(e) => handleCancelOnClick(e)}>연차 취소</button>
                                                }
                                            </td>
                                            :
                                            <td onClick={() => handleCancelOrCheckOnClick(leave.id)}>
                                                {
                                                    leave.status === 1 ? "진행 중"
                                                        : leave.status === 2 ? "완료"
                                                            : "취소"
                                                }
                                            </td>
                                    }
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