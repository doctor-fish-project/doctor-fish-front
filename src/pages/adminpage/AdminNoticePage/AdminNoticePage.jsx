import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import { useSetRecoilState } from 'recoil';
import { adminNoticeModalAtom } from '../../../atoms/modalAtoms';
import AdminListPagination from '../../../components/admincomponents/AdminListPagination/AdminListPagination';

function AdminNoticePage(props) {
    const nav = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const [totalPageCount, setTotalPageCount] = useState(1);

    const setNoticeOpen = useSetRecoilState(adminNoticeModalAtom);

    const limit = 14;

    useEffect(() => {
        if (!searchParams?.get("page")) {
            setSearchParams(searchParams => ({
                ...searchParams,
                page: 1
            }))
        }
    }, [searchParams, setSearchParams])

    const noticeTableHeader = useQuery(
        ["noticeTalbeHeaderQuery"],
        async () => await instance.get(`/tableheader?pathName=${location.pathname}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const notices = useQuery(
        ["noticesQuery", searchParams.get("page")],
        async () => await instance.get(`/announce/list?page=${searchParams.get("page")}&limit=${limit}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setTotalPageCount(
                    response.data.totalCount % limit === 0
                        ? response.data.totalCount / limit
                        : Math.floor(response.data.totalCount / limit) + 1)
            }
        }
    )

    console.log(totalPageCount)

    const handlePageOnChange = (e) => {
        nav(`/admin/reservation?page=${e.selected + 1}`);
    }

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"공지사항"} count={notices?.data?.data?.announceCount}>
                    <AdminTableLayout>
                        <AdminTableHeader tableheaders={noticeTableHeader?.data?.data}/>
                        <tbody css={s.layout(noticeTableHeader?.data?.data?.length)}>
                            {
                                notices?.data?.data?.announcements?.map((announcement, idx) =>
                                    <tr key={announcement.id} >
                                        <td>{idx + 1}</td>
                                        <td>{announcement?.title}</td>
                                        <td>{announcement?.userId}</td>
                                        <td>{announcement?.registerDate.slice(0, 10)}</td>
                                        <td>수정/삭제</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </AdminTableLayout>
                    <AdminListPagination searchParams={searchParams} count={totalPageCount} onChange={handlePageOnChange} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminNoticePage;