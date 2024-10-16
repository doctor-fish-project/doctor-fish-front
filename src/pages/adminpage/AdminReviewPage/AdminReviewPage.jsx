import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import { useLocation } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryIdAtom, reviewIdAtom } from '../../../atoms/adminAtoms';
import { adminReviewModalAtom } from '../../../atoms/modalAtoms';
import { logDOM } from '@testing-library/react';

function AdminReviewPage({ }) {
    const location = useLocation();

    const [theader, setTheader] = useState({});
    const categoryId = useRecoilValue(categoryIdAtom)
    const setAdminReviewOpen = useSetRecoilState(adminReviewModalAtom)
    const setReviewId = useSetRecoilState(reviewIdAtom);

    const handleReviewModalOnClick = (reveiwId) => {
        setReviewId(reveiwId)
        setAdminReviewOpen(true)
    }

    const reviewTableHeaders = useQuery(
        ["reviewTalbeHeadersQuery"],
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
    console.log(theader);
    const reviews = useQuery(
        ["reviewsQuery"],
        async () => await instance.get("/review"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )
    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"리뷰 및 댓글관리"}>
                    <AdminTableLayout>
                        <thead css={s.headLayout(reviewTableHeaders?.data?.data?.length)}>
                            <tr>
                                <th>{theader[0]}</th>
                                <th>{theader[1]}</th>
                                <th>{theader[4]}</th>
                                <th>{theader[2]}</th>
                                <th>{theader[3]}</th>
                            </tr>
                        </thead>
                        <tbody css={s.bodyLayout(reviewTableHeaders?.data?.data?.length)}>
                            {
                                reviews?.data?.data?.reviews.map(review =>
                                    <tr key={review.id} onClick={() => handleReviewModalOnClick(review.id)}>
                                        <td>{review.id}</td>
                                        <td>{review.userName}</td>
                                        <td>{review.content}</td>
                                        <td>{reviews?.data?.data?.reviewCount}</td>
                                        <td>{review.registerDate.slice(0, 10)}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </AdminTableLayout>
                    <div css={s.paginationBox}>
                        <AdminListPagination location={location} />
                    </div>
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReviewPage;