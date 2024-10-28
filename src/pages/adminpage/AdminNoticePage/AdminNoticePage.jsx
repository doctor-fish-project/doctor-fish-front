import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import { useMutation, useQuery } from 'react-query';
import { adminInstance, instance } from '../../../apis/utils/instance';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { adminNoticeModalAtom, adminNoticeWriteModalAtom } from '../../../atoms/modalAtoms';
import AdminListPagination from '../../../components/admincomponents/AdminListPagination/AdminListPagination';
import AdminPageLayout from '../../../components/admincomponents/AdminPageLayout/AdminPageLayout';
import { noticeIdAtom } from '../../../atoms/adminAtoms';

function AdminNoticePage(props) {
    const nav = useNavigate();
    
    const location = useLocation();
    
    const [searchParams, setSearchParams] = useSearchParams();

    const [totalPageCount, setTotalPageCount] = useState(1);

    const [noticeId, setNoticeId] = useRecoilState(noticeIdAtom);
    const setNoticeOpen = useSetRecoilState(adminNoticeModalAtom);
    const setNoticeWriteOpen = useSetRecoilState(adminNoticeWriteModalAtom);

    const limit = 14;

    useEffect(() => {
        if (!searchParams?.get("page")) {
            setSearchParams(searchParams => ({
                ...searchParams,
                page: 1
            }))
        }
    }, [searchParams])

    const noticeTableHeader = useQuery(
        ["noticeTalbeHeaderQuery"],
        async () => await adminInstance.get(`/tableheader?pathName=${location.pathname}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const notices = useQuery(
        ["noticesQuery", searchParams.get("page")],
        async () => await adminInstance.get(`/admin/announce/list?page=${searchParams.get("page")}&limit=${limit}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setTotalPageCount(
                    response.data.announceCount % limit === 0
                        ? response.data.announceCount / limit
                        : Math.floor(response.data.announceCount / limit) + 1)
            }
        }
    )
    
    const deleteNotice = useMutation(
        async (announceId) => await adminInstance.delete(`/admin/announce/${announceId}`),
        {
            onSuccess: response => {
                alert("삭제 완료");
                setNoticeId(0)
                window.location.reload();
            },
            onError: error => {
                alert("삭제 실패");
            }
        }
    )

    const handlePageOnChange = (e) => {
        nav(`/admin/reservation?page=${e.selected + 1}`);
    }

    const handleNoticeOpenOnClick = (noticeId) => {
        setNoticeId(noticeId);
        setNoticeOpen(true);
    }

    const handleWriteNoticeModalOpenOnClick = () => {
        setNoticeWriteOpen(true);
    }

    const handleDeleteOnClick = async (e, announceId) => {
        e.stopPropagation();
        if(window.confirm("삭제 하시겠습니까?")) {
            deleteNotice.mutateAsync(announceId).catch(() => {})
        }
    }

    return (
        <AdminContainer>
            <AdminPageLayout title={"공지사항"} count={notices?.data?.data?.announceCount}>
                <AdminTableLayout>
                    <AdminTableHeader tableheaders={noticeTableHeader?.data?.data} />
                    <tbody css={s.layout(noticeTableHeader?.data?.data?.length)}>
                        {
                            notices?.data?.data?.announcements?.map((announcement, idx) =>
                                <tr key={announcement.id} onClick={() => handleNoticeOpenOnClick(announcement.id)}>
                                    <td>{idx + 1}</td>
                                    <td>{announcement?.title}</td>
                                    <td>{announcement?.userName}</td>
                                    <td>{announcement?.registerDate.slice(0, 10)}</td>
                                    <td>
                                        <button onClick={(e) => handleDeleteOnClick(e, announcement.id)}>삭제</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </AdminTableLayout>
                <AdminListPagination searchParams={searchParams} count={totalPageCount} onChange={handlePageOnChange} />
                <button onClick={handleWriteNoticeModalOpenOnClick}>글쓰기</button>
            </AdminPageLayout>
        </AdminContainer>
    );
}

export default AdminNoticePage;