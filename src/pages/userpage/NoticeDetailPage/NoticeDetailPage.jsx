import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function NoticeDetailPage(props) {
    const params = useParams();
    const noticeId = params.noticeId;

    const [isShow, setIsShow] = useState(true);

    const notice = useQuery(
        ["noticeQuery"],
        async () => await instance.get(`/announce/${noticeId}`),
        {   
            enabled: !!noticeId,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <BackButton setShow={setIsShow} title={"공지사항"}/>
                <div css={s.layout}> 
                    <div css={s.titleBox}>
                        <h3>{notice?.data?.data?.title}</h3>
                    </div>
                    <div css={s.dateBox}>
                        {notice?.data?.data?.registerDate?.slice(0,10)}
                    </div>
                    <div css={s.contentBox} dangerouslySetInnerHTML={{__html: notice?.data?.data?.content}}></div>
                </div>
            </UserSubContainer>
        </UserSubLayout>
    );
}

export default NoticeDetailPage;