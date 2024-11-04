import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useInfiniteQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import NoticeDetailPage from '../NoticeDetailPage/NoticeDetailPage';
import { Route, Routes, useNavigate } from 'react-router-dom';

function NoticeListPage(props) {

    const nav = useNavigate();

    const loadMoreRef = useRef(null);

    const [isShow, setIsShow] = useState(true);

    const limit = 10;

    const noticeList = useInfiniteQuery(
        ["noticeListQuery"],
        async ({ pageParam = 1 }) => await instance.get(`/announce/list?page=${pageParam}&limit=${limit}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage, allPage) => {
                const totalPageCount = lastPage.data.announceCount % limit === 0
                    ? lastPage.data.announceCount / limit
                    : Math.floor(lastPage.data.announceCount / limit) + 1;

                return totalPageCount !== allPage.length ? allPage.length + 1 : null;
            }
        }
    );

    useEffect(() => {
        if (!noticeList.hasNextPage || !loadMoreRef.current || noticeList?.data?.pages[0].data?.announcements?.length < 10) {
            return;
        }

        const observer = new IntersectionObserver(([intersectionObserver]) => {
            if (intersectionObserver.isIntersecting) {
                noticeList.fetchNextPage();
            }
        }, { threshold: 1.0 });

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [noticeList.hasNextPage]);

    const handleNoticeDetailOnClick = (noticeId) => {
        nav(`/dashboard/notice/${noticeId}`)
    }

    return (
        <>
            <UserSubLayout isShow={isShow}>
                <UserSubContainer>
                    <BackButton setShow={setIsShow} title={"공지사항"} />
                    <div css={s.layout} ref={loadMoreRef}>
                        {
                            noticeList?.data?.pages?.map(page => page?.data?.announcements?.map(announcement =>
                                <div key={announcement?.id} css={s.noticeBox} onClick={() => handleNoticeDetailOnClick(announcement?.id)}>
                                    <div>{announcement?.title}</div>
                                    <div>{announcement?.registerDate?.slice(0, 10)}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div ref={loadMoreRef}></div>
                </UserSubContainer>
            </UserSubLayout>
            <Routes>
                <Route path='/:noticeId' element={<NoticeDetailPage />} />
            </Routes>
        </>

    );
}

export default NoticeListPage;