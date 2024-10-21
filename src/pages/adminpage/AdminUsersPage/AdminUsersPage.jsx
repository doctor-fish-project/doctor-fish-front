import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import { adminInstance } from '../../../apis/utils/instance';
import { useQuery } from 'react-query';
import AdminListPagination from '../../../components/admincomponents/AdminListPagination/AdminListPagination';
import AdminPageLayout from '../../../components/admincomponents/AdminPageLayout/AdminPageLayout';

function AdminUsersPage(props) {
    const nav = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const [totalPageCount, setTotalPageCount] = useState(1);
    const [theader, setTheader] = useState({});

    const limit = 13;

    useEffect(() => {
        if (!searchParams?.get("page")) {
            setSearchParams(searchParams => ({
                ...searchParams,
                page: 1
            }))
        }
    }, [searchParams])

    const userTableHeaders = useQuery(
        ["usersTableHeadersQuery"],
        async () => await adminInstance.get(`/tableheader?pathName=${location.pathname}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                response.data.map((th, index) => (
                    setTheader(theader => ({
                        ...theader,
                        [index]: th.name
                    }))
                ))
            }
        }
    )

    const users = useQuery(
        ["usersQuery", searchParams.get("page")],
        async () => await adminInstance.get(`admin/user/list?page=${searchParams.get("page")}&limit=${limit}`),
        {
            enabled: !!searchParams.get("page"),
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

    const handlePageOnChange = (e) => {
        nav(`/admin/users?page=${e.selected + 1}`);
    }

    return (
        <AdminContainer>
            <AdminPageLayout title={"회원관리"} count={users?.data?.data?.userCount}>
                <AdminTableLayout>
                    <thead css={s.headLayout(userTableHeaders?.data?.data?.length)}>
                        <tr>
                            <th>{theader[0]}</th>
                            <th>{theader[1]}</th>
                            <th>{theader[2]}</th>
                            <th>{theader[3]}</th>
                            <th>{theader[4]}</th>
                        </tr>
                    </thead>
                    <tbody css={s.bodyLayout(userTableHeaders?.data?.data?.length)}>
                        {/* {
                                users?.data?.data?.users.map(user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.content}</td>
                                        <td>{user?.data?.data?.reviewCount}</td>
                                        <td>{user.registerDate.slice(0, 10)}</td>
                                    </tr>
                                )
                            } */}
                    </tbody>
                </AdminTableLayout>
                <AdminListPagination searchParams={searchParams} count={totalPageCount} onChange={handlePageOnChange} />
            </AdminPageLayout>
        </AdminContainer>
    );
}

export default AdminUsersPage;