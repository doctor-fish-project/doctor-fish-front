import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../SubContainer/SubContainer';
import SubLayout from '../../SubLayout/SubLayout';
import BackButton from '../../BackButton/BackButton';

function MyProfile(props) {
    const [isShow, setShow] = useState(true);

    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow} />
            </SubContainer>
        </SubLayout>

    );
}

export default MyProfile;