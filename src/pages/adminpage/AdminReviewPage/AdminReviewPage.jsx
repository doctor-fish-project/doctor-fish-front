import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListPagination from '../../../components/admincomponents/adminList/AdminListPagination/AdminListPagination';
import { useLocation } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryIdAtom, reviewIdAtom } from '../../../atoms/adminAtoms';
import { adminReviewModalAtom } from '../../../atoms/modalAtoms';

function AdminReviewPage(props) {
    const location = useLocation();

    const categoryId = useRecoilValue(categoryIdAtom)
    const setAdminReviewOpen = useSetRecoilState(adminReviewModalAtom)
    const setReviewId = useSetRecoilState(reviewIdAtom);

    const handleReviewModalOnClick = (reveiwId) => {
        setReviewId(reveiwId)
        setAdminReviewOpen(true)
    }

    const reviewTableHeaders = useQuery(
        ["reviewTalbeHeadersQuery", categoryId],
        async () => await instance.get("/tableheader", {
            params: {
                categoryId
            }
        }),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

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
                        <AdminTableHeader tableheaders={reviewTableHeaders?.data?.data} />
                        <tbody css={s.layout(reviewTableHeaders?.data?.data?.length)}>
                            {
                                reviews?.data?.data?.reviews.map(review =>
                                    <tr key={review.id} onClick={handleReviewModalOnClick}>
                                        <td>{review.id}</td>
                                        <td>{review.userName}</td>
                                        <td>{reviews?.data?.data?.reviewCount}</td>
                                        <td>{review.registerDate.slice(0,10)}</td>
                                        <td>{review.content}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </AdminTableLayout>
                    <AdminListPagination location={location} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReviewPage;