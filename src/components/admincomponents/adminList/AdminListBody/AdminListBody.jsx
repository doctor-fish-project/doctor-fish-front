import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useSetRecoilState } from 'recoil';
import { adminModalAtom } from '../../../../atoms/modalAtoms';
import AdminModalLayout from '../../adminModal/AdminModalLayout/AdminModalLayout';

function AdminListBody({ isShow }) {
    const [reviewModal, setReviewModal] = useState(false);

    const handleModalOpen = () => {
        setReviewModal(!reviewModal)
    }
    return (
        <>
            <tbody css={s.layout}>
                <tr onClick={handleModalOpen}>
                    <td>1</td>
                    <td>ffhjkl1230@naver.com</td>
                    <td>백승주</td>
                    <td>010-8704-0537</td>
                    <td>2024-10-14</td>
                </tr>
            </tbody>
            {
                isShow && 
               <AdminModalLayout isOpen={reviewModal} onRequestClose={() => setReviewModal(false)}>
                    <div css={s.modalContainer}>
                        asdasdasdasd
                    </div>
                </AdminModalLayout>
            }
        </>
    );
}

export default AdminListBody;