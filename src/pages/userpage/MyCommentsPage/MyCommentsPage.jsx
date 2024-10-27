import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import ReviewComment from '../../../components/usercomponents/reviewPage/ReviewComment/ReviewComment';

function MyCommentsPage(props) {
    const [isShow, setShow] = useState(true);

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <BackButton setShow={setShow} title={"내 댓글"} />
                    <div css={s.layout}>
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