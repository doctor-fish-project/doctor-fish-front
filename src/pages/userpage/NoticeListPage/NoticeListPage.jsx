import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';

function NoticeListPage(props) {
    const [isShow, setIsShow] = useState(true);
     
    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <BackButton setShow={setIsShow} title={"공지사항"}/>
                <div css={s.layout}> 
                    <div css={s.noticeBox}>
                        <div>안녕하세요</div>
                        <div>2024-10-28</div>
                    </div>
                </div>
            </UserSubContainer>
        </UserSubLayout>
    );
}

export default NoticeListPage;