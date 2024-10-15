import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminModalLayout from '../AdminModalLayout/AdminModalLayout';
import { adminReviewModalAtom } from '../../../../atoms/modalAtoms';
import { useRecoilState } from 'recoil';
import { reviewIdAtom } from '../../../../atoms/adminAtoms';
import { IoIosClose } from "react-icons/io"


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
                
            </div>
        </AdminModalLayout>
    );
}

export default AdminReview;