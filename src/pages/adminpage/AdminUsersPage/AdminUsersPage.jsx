import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListPagination from '../../../components/admincomponents/AdminListPagination/AdminListPagination';
import { useLocation } from 'react-router-dom';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import { instance } from '../../../apis/utils/instance';
import { useQuery } from 'react-query';

function AdminUsersPage(props) {
    const location = useLocation();

    const [theader, setTheader] = useState({});

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
        ["usersQuery"],
        async () => await instance.get("/user/list"),
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
                    <AdminListPagination location={location}/>
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminUsersPage;