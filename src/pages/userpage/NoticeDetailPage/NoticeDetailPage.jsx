import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';

function NoticeDetailPage(props) {
    const [isShow, setIsShow] = useState(true);
    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <BackButton setShow={setIsShow} title={"공지사항"}/>
                <div css={s.layout}> 
                    <div css={s.titleBox}>
                        <h3>공지사항 제목</h3>
                    </div>
                    <div css={s.dateBox}>
                        <p>2024.10.27</p>
                    </div>
                    <div css={s.contentBox}>
                        <div></div>
                    </div>
                </div>
            </UserSubContainer>
        </UserSubLayout>
    );
}

export default NoticeDetailPage;