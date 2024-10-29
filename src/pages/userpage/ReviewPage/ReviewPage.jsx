import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import ReviewBox from '../../../components/usercomponents/reviewPage/ReviewBox/ReviewBox';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { BsPencilSquare } from 'react-icons/bs';
import { useInfiniteQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import ReviewDetailPage from '../ReviewDetailPage/ReviewDetailPage';
import ReviewSelectPage from '../ReviewSelectPage/ReviewSelectPage';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';

function ReviewPage(props) {
    const nav = useNavigate();
    const loadMoreRef = useRef(null);

    const limit = 10;
   
    const reviews = useInfiniteQuery(
        ["reviewsQuery"],
        async ({ pageParam = 1 }) => await instance.get(`/review/list?page=${pageParam}&limit=${limit}`),
        {
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
        if (!reviews.hasNextPage || !loadMoreRef.current || reviews?.data?.pages[0].data?.reviewCount < 10) {
            return;
        }

        const observer = new IntersectionObserver(([intersectionObserver]) => {
            if (intersectionObserver.isIntersecting) {
                reviews.fetchNextPage();
            }
        }, { threshold: 1.0 });

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [reviews.hasNextPage]);

    const handleReviewDetailOnClick = (reviewId) => {
        nav(`/review/${reviewId}`)
    }

    const handleReviewSelectOnClick = () => {
        nav("/review/select");
    }
    
    return (
        <>
            <UserSubContainer>
                <DashBoardTopBar title={"리뷰"} icon={<BsPencilSquare />} onClick={handleReviewSelectOnClick} />
                <div css={s.layout} ref={loadMoreRef}>
                    {
                        reviews?.data?.pages?.map(page => page?.data?.reviews?.map(review => 
                            <ReviewBox key={review.id} review={review} onClick={() => handleReviewDetailOnClick(review.id)} />
                        ))
                    }
                </div>
            </UserSubContainer>
            <Routes>
                <Route path='/select/*' element={<ReviewSelectPage />} />
                <Route path='/:reviewId/*' element={<ReviewDetailPage />} />
            </Routes>
        </>
    );
}

export default ReviewPage;