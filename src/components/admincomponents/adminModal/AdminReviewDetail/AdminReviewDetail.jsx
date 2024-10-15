import React, { useState } from 'react';
import AdminModalLayout from '../AdminModalLayout/AdminModalLayout';
import { useRecoilState } from 'recoil';
import { adminModalAtom } from '../../../../atoms/modalAtoms';

function AdminReviewDetail(props) {
    const [ adminModalOpen, setAdminModalOpen ] = useRecoilState(adminModalAtom);
    return (
        <AdminModalLayout isOpen={adminModalOpen}>
            
        </AdminModalLayout>
    );
}

export default AdminReviewDetail;