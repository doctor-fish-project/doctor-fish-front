import React, { useState } from 'react';
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
            </SubContainer>
        </SubLayout>
    );
}

export default DoctorDetailPage;