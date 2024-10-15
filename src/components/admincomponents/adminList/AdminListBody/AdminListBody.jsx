import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminModalLayout from '../../adminModal/AdminModalLayout/AdminModalLayout';
import { FcLike } from 'react-icons/fc';
import { TESTS } from '../../../../constants/admin/test3';

function AdminListBody({ isShow }) {
    const [reviewModal, setReviewModal] = useState(false);

    const handleModalOpen = () => {
        setReviewModal(!reviewModal)
    }
    return (
        <>
            {
                TESTS.map(test => (
                    <tbody key={test} css={s.layout}>
                        <tr onClick={handleModalOpen}>
                            <td>{test.no}</td>
                            <td>{test.eamil}</td>
                            <td>{test.name}</td>
                            <td>{test.phoneNumber}</td>
                            <td>{test.date}</td>
                        </tr>
                    </tbody>
                ))
            }

            {
                isShow &&
                <AdminModalLayout isOpen={reviewModal} onRequestClose={() => setReviewModal(false)}>
                    <div css={s.modalContainer}>
                        <div css={s.container}>
                            <div css={s.nameBox}>
                                <p>이름</p>
                            </div>
                            <div css={s.imgBox}>
                                <img src="" alt="" />
                            </div>
                            <div css={s.dateAndLike}>
                                <p>날짜</p>
                                <p><FcLike />10</p>
                            </div>
                        </div>
                    </div>
                </AdminModalLayout>
            }
        </>
    );
}

export default AdminListBody;