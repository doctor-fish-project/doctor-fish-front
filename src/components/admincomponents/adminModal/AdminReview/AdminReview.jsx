import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminModalLayout from '../AdminModalLayout/AdminModalLayout';
import { adminReviewModalAtom } from '../../../../atoms/modalAtoms';
import { useRecoilState } from 'recoil';
import { reviewIdAtom } from '../../../../atoms/adminAtoms';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io"
import { FcLike } from 'react-icons/fc';


function AdminReview({ containerRef }) {
    const [reviewOpen, setReviewOpen] = useRecoilState(adminReviewModalAtom);
    const [reviewId, setReviewId] = useRecoilState(reviewIdAtom);

    const closeModal = () => {
        setReviewOpen(false)
        setReviewId(0)
    }

    return (
        <AdminModalLayout containerRef={containerRef} isOpen={reviewOpen} closeModal={closeModal}>
            <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>
                <div css={s.container}>
                    <div css={s.reviewBox}>
                        <div css={s.nameBox}>
                            <img src='https://firebasestorage.googleapis.com/v0/b/userprofile-9dd9e.appspot.com/o/user%2Fdefault.png?alt=media&token=caad563b-86be-48bb-a70a-a717042d870f' alt="" />
                            <p>asdf</p>
                        </div>
                        <div css={s.imgBox}>
                            <button css={s.preButton} ><IoIosArrowBack /></button>
                            <button css={s.nextButton} ><IoIosArrowForward /></button>
                            <img src="" alt="" />
                        </div>
                        <div css={s.dateAndLike}>
                            <p>2024-10-16</p>
                            <p><FcLike />10</p>
                        </div>
                        <div css={s.contentBox}>
                            asdfasdfasdfasdfasdfasdfasdf
                        </div>
                    </div>
                    <div css={s.reviewBox}>

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