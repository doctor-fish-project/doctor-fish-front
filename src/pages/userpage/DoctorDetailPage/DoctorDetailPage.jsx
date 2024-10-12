import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubLayout from '../../../components/usercomponents/SubLayout/SubLayout';
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useParams } from 'react-router-dom';

function DoctorDetailPage(props) {
    const params = useParams();
    const doctorId = params.doctorId;
    const [isShow, setShow] = useState(true);

    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow} />
                <div css={s.layout}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/userprofile-9dd9e.appspot.com/o/user%2Fdoctor-character-man.png?alt=media&token=aa1dea01-8235-472e-8b87-3b520e6b05b1" alt="" />
                    <div css={s.header}>
                        <p>이름</p>
                        <p>부서</p>
                    </div>
                    <div css={s.body}>
                        <p>이력</p>
                    </div>
                </div>
            </SubContainer>
        </SubLayout>
    );
}

export default DoctorDetailPage;