import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { adminInstance } from '../../../apis/utils/instance';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {reviewIdAtom, searchAtom, searchClickAtom } from '../../../atoms/adminAtoms';
import { adminReviewModalAtom } from '../../../atoms/modalAtoms';
import AdminPageLayout from '../../../components/admincomponents/AdminPageLayout/AdminPageLayout';
import AdminPagination from '../../../components/admincomponents/AdminPagination/AdminPagination';
import AdminTableLayout from '../../../components/admincomponents/adminTable/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminTable/AdminTableHeader/AdminTableHeader';

function AdminReviewPage(props) {
    const nav = useNavigate();

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    const [adminReviewOpen, setAdminReviewOpen] = useRecoilState(adminReviewModalAtom);
    const setReviewId = useSetRecoilState(reviewIdAtom);

    const [totalPageCount, setTotalPageCount] = useState(1);

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

    const reviewTableHeaders = useQuery(
        ["reviewTalbeHeadersQuery"],
        async () => await adminInstance.get(`/admin/tableheader?pathName=${location.pathname}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const reviews = useQuery(
        ["reviewsQuery", searchParams.get("page"), adminReviewOpen, searchClick],
        async () => await adminInstance.get(`/admin/review?page=${searchParams.get("page")}&limit=${limit}`, {params: {searchText}}),
        {
            enabled: !!searchParams.get("page"),
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setTotalPageCount(
                    response.data.reviewCount % limit === 0
                        ? response.data.reviewCount / limit
                        : Math.floor(response.data.reviewCount / limit) + 1);
                setSearchClick(false);
            }
        }
    )

    const handlePageOnChange = (e) => {
        nav(`/admin/review?page=${e.selected + 1}`);
    }

    const handleReviewModalOnClick = (reveiwId) => {
        setReviewId(reveiwId)
        setAdminReviewOpen(true)
    }

    return (
            <AdminContainer>
                <AdminPageLayout title={"리뷰 및 댓글관리"} count={reviews?.data?.data?.reviewCount}>
                    <AdminTableLayout>
                       <AdminTableHeader tableheaders={reviewTableHeaders?.data?.data}/>
                        <tbody css={s.bodyLayout(reviewTableHeaders?.data?.data?.length)}>
                            {
                                reviews?.data?.data?.reviews.map((review, idx) =>
                                    <tr key={review.id} onClick={() => handleReviewModalOnClick(review.id)}>
                                        <td>{idx + 1}</td>
                                        <td>{review.userName}</td>
                                        <td>{review.content}</td>
                                        <td>{review.commentCount}</td>
                                        <td>{review.registerDate.slice(0, 10)}</td>
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

export default AdminReviewPage;