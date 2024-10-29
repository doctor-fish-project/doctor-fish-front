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
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import { useRecoilState } from 'recoil';
import { searchAtom, searchClickAtom } from '../../../atoms/adminAtoms';

function AdminUsersPage(props) {
    const nav = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const [totalPageCount, setTotalPageCount] = useState(1);
    const [theader, setTheader] = useState({});

    const [searchText, setSearchText] = useRecoilState(searchAtom);
    const [searchClick, setSearchClick] = useRecoilState(searchClickAtom);

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
        ["usersQuery", searchParams.get("page"), searchClick],
        async () => await adminInstance.get(`admin/user/list?page=${searchParams.get("page")}&limit=${limit}`, {params: {searchText}}),
        {
            enabled: !!searchParams.get("page"),
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setTotalPageCount(
                    response?.data?.userCount % limit === 0
                        ? response.data.userCount / limit
                        : Math.floor(response.data.userCount / limit) + 1);
                setSearchClick(false);
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
                    <AdminTableHeader tableheaders={userTableHeaders?.data?.data}/>
                    <tbody css={s.bodyLayout(userTableHeaders?.data?.data?.length)}>
                        {
                            users?.data?.data?.users.map((user, idx) =>
                                <tr key={user.id}>
                                    <td>{idx + 1}</td>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.registerDate.slice(0, 10)}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </AdminTableLayout>
                <AdminListPagination searchParams={searchParams} count={totalPageCount} onChange={handlePageOnChange} />
            </AdminPageLayout>
        </AdminContainer>
    );
}

export default AdminUsersPage;