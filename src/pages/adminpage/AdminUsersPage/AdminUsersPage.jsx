import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import { instance } from '../../../apis/utils/instance';
import { useQuery } from 'react-query';
import AdminListPagination from '../../../components/admincomponents/AdminListPagination/AdminListPagination';

function AdminUsersPage(props) {
    const nav = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const [totalPageCount, setTotalPageCount] = useState(1);
    const [theader, setTheader] = useState({});

    const limit = 14


    useEffect(() => {
        if(!searchParams?.get("page")) {
            setSearchParams(searchParams => ({
                ...searchParams,
                page: 1
            }))
        }
    }, [searchParams, setSearchParams])

    const userTableHeaders = useQuery(
        ["usersTableHeadersQuery"],
        async () => await instance.get(`/tableheader?pathName=${location.pathname}`),
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
        async () => await instance.get(`/user/list?page=${searchParams.get("page")}&limit=${limit}`),
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

    const handlePageOnChange = (e) => {
        nav(`/admin/users?page=${e.selected + 1}`);
    }

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"회원관리"} count={users?.data?.data?.userCount}>
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
                                reviews?.data?.data?.reviews.map(review =>
                                    <tr key={review.id} onClick={() => handleReviewModalOnClick(review.id)}>
                                        <td>{review.id}</td>
                                        <td>{review.userName}</td>
                                        <td>{review.content}</td>
                                        <td>{reviews?.data?.data?.reviewCount}</td>
                                        <td>{review.registerDate.slice(0, 10)}</td>
                                    </tr>
                                )
                            } */}
                        </tbody>
                    </AdminTableLayout>
                    <AdminListPagination searchParams={searchParams} count={totalPageCount} onChange={handlePageOnChange} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminUsersPage;