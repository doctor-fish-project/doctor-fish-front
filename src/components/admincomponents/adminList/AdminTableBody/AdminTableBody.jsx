import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { TESTS } from '../../../../constants/admin/test3';
import { useSetRecoilState } from 'recoil';
import { adminReviewModalAtom } from '../../../../atoms/modalAtoms';
import { reviewIdAtom } from '../../../../atoms/adminAtoms';

function AdminTableBody({ tdList }) {

    const setAdminReviewOpen = useSetRecoilState(adminReviewModalAtom)
    const setReviewId = useSetRecoilState(reviewIdAtom);

    const handleReviewModalOnClick = () => {
        setAdminReviewOpen(true)
    }

    return (
        <tbody css={s.layout}>
            {
                TESTS?.map(test =>
                    <tr onClick={handleReviewModalOnClick}>
                        <td>{test.no}</td>
                        <td>{test.eamil}</td>
                        <td>{test.name}</td>
                        <td>{test.phoneNumber}</td>
                        <td>{test.date}</td>
                    </tr>
                )
            }
        </tbody>
    );
}

export default AdminTableBody;