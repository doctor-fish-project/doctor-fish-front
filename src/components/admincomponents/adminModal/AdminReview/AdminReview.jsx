import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminModalLayout from '../AdminModalLayout/AdminModalLayout';
import { adminReviewModalAtom } from '../../../../atoms/modalAtoms';
import { useRecoilState } from 'recoil';
import { reviewIdAtom } from '../../../../atoms/adminAtoms';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io"
import { FcLike } from 'react-icons/fc';
import { useQuery, useQueryClient } from 'react-query';
import { adminInstance, instance } from '../../../../apis/utils/instance';
import ReviewComment from '../../../usercomponents/reviewPage/ReviewComment/ReviewComment';


function AdminReview({ containerRef }) {
    const queryClient = useQueryClient();

    const [reviewOpen, setReviewOpen] = useRecoilState(adminReviewModalAtom);
    const [reviewId, setReviewId] = useRecoilState(reviewIdAtom);

    const [mouseOverState, setMouseOverState] = useState(false);
    const [index, setIndex] = useState(0);

    const reviewByreviewId = useQuery(
        ["reviewByreviewIdQuery"],
        async () => await adminInstance.get(`/admin/review/${reviewId}`),
        {
            enabled: reviewOpen,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )
    
    const comments = useQuery(
        ["commentsQuery"],
        async () => await adminInstance.get(`/admin/review/${reviewId}/comments`),
        {
            enabled: reviewOpen,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const handleMouseOver = () => {
        setMouseOverState(true)
    }

    const handleMouseOut = () => {
        setMouseOverState(false)
    }

    const preImgOnClick = (e, index) => {
        e.stopPropagation();
        if (index > 0 && index < reviewImgs.length) {
            setIndex(index - 1)
        }
    }

    const nextImgOnClick = (e, index) => {
        e.stopPropagation();
        if (index === 0 || index < reviewImgs.length) {
            setIndex(index + 1)
        }
    }

    const closeModal = () => {
        setReviewOpen(false)
        setReviewId(0)
        reviewByreviewId.remove();
        
    }
    const reviewImgs = JSON.parse(reviewByreviewId?.data?.data?.img === undefined ? '[]' : reviewByreviewId?.data?.data?.img)

    return (
        <AdminModalLayout containerRef={containerRef} isOpen={reviewOpen} closeModal={closeModal}>
            <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>
                <div css={s.container}>
                    <div css={s.reviewBox}>
                        <div css={s.nameBox}>
                            <img src={reviewByreviewId?.data?.data?.userImg} alt="" />
                            <p>{reviewByreviewId?.data?.data?.userName}</p>
                        </div>
                        {
                            reviewImgs === null ? <></> : reviewImgs.length === 0 ? <></> :
                                <div css={s.imgBox} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                    {
                                        !!mouseOverState &&
                                            index !== 0 ? <button css={s.preButton} onClick={(e) => preImgOnClick(e, index)}><IoIosArrowBack /></button>
                                            : index < reviewImgs?.length - 1 && <button css={s.nextButton} onClick={(e) => nextImgOnClick(e, index)}><IoIosArrowForward /></button>
                                    }
                                    <img src={reviewByreviewId.isLoading ? [] : JSON.parse(reviewByreviewId?.data?.data?.img)} alt="" />
                                </div>
                        }
                        <div css={s.dateAndLike}>
                            <p>{reviewByreviewId?.data?.data?.registerDate.slice(0, 10)}</p>
                            <p><FcLike />10</p>
                        </div>
                        <div css={s.contentBox}>
                            {reviewByreviewId?.data?.data?.content}
                        </div>
                    </div>
                    <div css={s.commentBox}>
                        <ReviewComment comment={comments} />
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button>게시물삭제</button>
                </div>
            </div>
        </AdminModalLayout>
    );
}

export default AdminReview;