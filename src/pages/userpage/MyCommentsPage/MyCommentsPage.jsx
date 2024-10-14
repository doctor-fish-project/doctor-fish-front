import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubLayout from '../../../components/usercomponents/SubLayout/SubLayout';
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';

function MyCommentsPage(props) {
    const [isShow, setShow] = useState(true);

    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow} />

            </SubContainer>
        </SubLayout>
    );
}

export default MyCommentsPage;