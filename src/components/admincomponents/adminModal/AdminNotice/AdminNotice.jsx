import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminModalLayout from '../AdminModalLayout/AdminModalLayout';
import { adminNoticeModalAtom, adminReviewModalAtom } from '../../../../atoms/modalAtoms';
import { useRecoilState } from 'recoil';
import { noticeIdAtom, reviewIdAtom } from '../../../../atoms/adminAtoms';
import { IoIosClose } from "react-icons/io"


function AdminNotice({ containerRef }) {
    const [noticeOpen, setNoticeOpen] = useRecoilState(adminNoticeModalAtom);
    const [noticeId, setNoticeId] = useRecoilState(noticeIdAtom);

    const closeModal = () => {
        setNoticeOpen(false)
        setNoticeId(0)
    }

    return (
        <AdminModalLayout containerRef={containerRef} isOpen={noticeOpen} closeModal={closeModal}>
             <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>
                
            </div>
        </AdminModalLayout>
    );
}

export default AdminNotice;