import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../SubContainer/SubContainer';
import SubLayout from '../../SubLayout/SubLayout';
import BackButton from '../../BackButton/BackButton';
import { useQueryClient } from 'react-query';

function MyProfile(props) {
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

export default MyProfile;