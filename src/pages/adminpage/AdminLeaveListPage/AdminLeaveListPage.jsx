import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageLayout from '../../../components/admincomponents/AdminPageLayout/AdminPageLayout';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { adminInstance } from '../../../apis/utils/instance';
import AdminPagination from '../../../components/admincomponents/AdminPagination/AdminPagination';
import AdminTableLayout from '../../../components/admincomponents/adminTable/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminTable/AdminTableHeader/AdminTableHeader';

function AdminLeaveListPage(props) {
    const nav = useNavigate();
    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    const [leaveId, setLeaveId] = useState(0);
    const [totalPageCount, setTotalPageCount] = useState(1);

    const limit = 14;

    useEffect(() => {
        if (!searchParams?.get("page")) {
            setSearchParams(searchParams => ({
                ...searchParams,
                page: 1
            }))
        }
    }, [searchParams])

    const leaveListAllTableHeaders = useQuery(
        ["leaveListAllTableHeadersQuery"],
        async () => await adminInstance.get(`/admin/tableheader?pathName=${location.pathname}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const leaves = useQuery(
        ["leavesQuery", searchParams.get("page")],
        async () => await adminInstance.get(`/admin/leave/list/info?page=${searchParams.get("page")}&limit=${limit}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setTotalPageCount(
                    response?.data?.leaveCount % limit === 0
                        ? response?.data?.leaveCount / limit
                        : Math.floor(response?.data?.leaveCount / limit) + 1);
                
            }
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

    const handlePageOnChange = (e) => {
        nav(`/admin/leavelist?page=${e.selected + 1}`);
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
                                        leaveId === leave?.id ?
                                        <td onClick={() => handleCancelOrCheckOnClick(leave?.id)}>
                                        {
                                            leave?.status === 1 && 
                                            <>
                                                <button onClick={(e) => handleCheckOnClick(e)}>연차 확인</button>
                                                <button onClick={(e) => handleCancelOnClick(e)}>연차 취소</button>
                                            </>
                                        }
                                        {
                                            leave?.status === 2 && <button onClick={(e) => handleCancelOnClick(e)}>연차 취소</button> 
                                        }
                                        {
                                            leave?.status === 3 && "취소"
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
                <AdminPagination searchParams={searchParams} count={totalPageCount} onChange={handlePageOnChange} />
            </AdminPageLayout>
        </AdminContainer>
    );
}

export default AdminLeaveListPage;