import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import SubLayout from '../../../components/usercomponents/SubLayout/SubLayout';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useQueryClient } from 'react-query';

function MyProfilePage(props) {
    const [isShow, setShow] = useState(true);

    const queryClient = useQueryClient()
    const userInfo = queryClient.getQueryData("userInfoQuery")
    console.log(userInfo)
    
    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow} />
            </SubContainer>
        </SubLayout>

    );
}

export default MyProfilePage;