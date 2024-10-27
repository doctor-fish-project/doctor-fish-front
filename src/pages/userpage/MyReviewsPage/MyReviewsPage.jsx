import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import SubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import ReviewBox from '../../../components/usercomponents/reviewPage/ReviewBox/ReviewBox';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ReviewDetailPage from '../ReviewDetailPage/ReviewDetailPage';

function MyReviewsPage(props) {
    const nav = useNavigate();
    const loadMoreRef = useRef();

    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery")

    const [isShow, setShow] = useState(true);

    const limit = 10;

    const myReviews = useInfiniteQuery(
        ["myReviewsQuery"],
        async ({ pageParam = 1 }) => await instance.get(`/review/me?page=${pageParam}&limit=${limit}`),
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage, allPage) => {
                const totalPageCount = lastPage.data.reviewCount % limit === 0
                    ? lastPage.data.reviewCount / limit
                    : Math.floor(lastPage.data.reviewCount / limit) + 1;

                return totalPageCount !== allPage.length ? allPage.length + 1 : null;
            }
        }
    );

    useEffect(() => {
        if (!myReviews.hasNextPage || !loadMoreRef.current || myReviews?.data?.pages[0].data?.reviewCount < 10) {
            return;
        }

        const observer = new IntersectionObserver(([intersectionObserver]) => {
            if (intersectionObserver.isIntersecting) {
                myReviews.fetchNextPage();
            }
        }, { threshold: 1.0 });

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [myReviews.hasNextPage]);

    const handleReviewDetailOnClick = (reviewId) => {
        nav(`/review/${reviewId}`)
    }

    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow} title={"내 리뷰"} />
                <div css={s.layout}>
                    {
                        myReviews?.data?.pages?.map(page => page?.data?.reviews?.map(myreview =>
                            <ReviewBox key={myreview.id} review={myreview} onClick={() => handleReviewDetailOnClick(myreview.id)} />
                        ))
                    }
                </div>
            </SubContainer>
        </SubLayout>
    );
}

export default MyReviewsPage;