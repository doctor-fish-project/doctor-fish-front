import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';

function MyCommentsPage(props) {
    const [isShow, setShow] = useState(true);

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <BackButton setShow={setShow} />

            </UserSubContainer>
        </UserSubLayout>
    );
}

export default MyCommentsPage;