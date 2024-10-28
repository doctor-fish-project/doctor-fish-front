import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import ReviewComment from '../../../components/usercomponents/reviewPage/ReviewComment/ReviewComment';
import { useInfiniteQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function MyCommentsPage(props) {
    const loadMoreRef = useRef(null);

    const [isShow, setShow] = useState(true);

    const limit = 10;

    const myComments = useInfiniteQuery(
        ["myCommentsQuery"],
        async ({ pageParam = 1 }) => await instance.get(`/review/comments/me?page=${pageParam}&limit=${limit}`),
        {
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage, allPage) => {
                const totalPageCount = lastPage.data.commentCount % limit === 0
                    ? lastPage.data.commentCount / limit
                    : Math.floor(lastPage.data.commentCount / limit) + 1;

                return totalPageCount !== allPage.length ? allPage.length + 1 : null;
            }
        }
    );

    console.log(myComments)
    useEffect(() => {
        if (!myComments.hasNextPage || !loadMoreRef.current || myComments?.data?.pages[0].data?.commentCount < 10) {
            return;
        }

        const observer = new IntersectionObserver(([intersectionObserver]) => {
            if (intersectionObserver.isIntersecting) {
                myComments.fetchNextPage();
            }
        }, { threshold: 1.0 });

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [myComments.hasNextPage]);

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <BackButton setShow={setShow} title={"내 댓글"} />
                    <div css={s.layout} ref={loadMoreRef}>
                        <div css={s.reviewContainer}>
                            <div css={s.imgAndReview}>
                                <div>
                                    <div css={s.imgBox}>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div css={s.reviewBox}>
                                    <span>소닉</span>
                                    <span>안녕하세요</span>
                                </div>
                            </div>
                            <div>
                                <ReviewComment />
                            </div>
                        </div>
                    </div>
            </UserSubContainer>
        </UserSubLayout>
    );
}

export default MyCommentsPage;