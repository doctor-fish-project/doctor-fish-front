import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import AdminListPagination from '../../../components/admincomponents/AdminListPagination/AdminListPagination';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import { useSetRecoilState } from 'recoil';
import { reviewIdAtom } from '../../../atoms/adminAtoms';
import { adminReviewModalAtom } from '../../../atoms/modalAtoms';

function AdminReviewPage({ }) {
    const nav = useNavigate();

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    const setAdminReviewOpen = useSetRecoilState(adminReviewModalAtom)
    const setReviewId = useSetRecoilState(reviewIdAtom);

    const [reservationId, setReservationId] = useState(0)
    const [totalPageCount, setTotalPageCount] = useState(1);
    const [theader, setTheader] = useState({});

    const limit = 14;

    useEffect(() => {
        if(!searchParams?.get("page")) {
            setSearchParams(searchParams => ({
                ...searchParams,
                page: 1
            }))
        }
    }, [])

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

    const reviews = useQuery(
        ["reviewsQuery", searchParams.get("page")],
        async () => await instance.get(`/admin/review?page=${searchParams.get("page")}&limit=${limit}`),
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
        nav(`/admin/reservation?page=${e.selected + 1}`);
    }

    const handleReviewModalOnClick = (reveiwId) => {
        setReviewId(reveiwId)
        setAdminReviewOpen(true)
    }

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"리뷰 및 댓글관리"} count={reviews?.data?.data?.reviewCount}>
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
                    <AdminListPagination searchParams={searchParams} count={totalPageCount} onChange={handlePageOnChange} />
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminReviewPage;