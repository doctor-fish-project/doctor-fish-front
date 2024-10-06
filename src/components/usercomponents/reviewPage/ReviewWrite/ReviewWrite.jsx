import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubLayout from '../../SubLayout/SubLayout';
import SubContainer from '../../SubContainer/SubContainer';
import BackButton from '../../BackButton/BackButton';

function ReviewWrite(props) {
    const [ isShow, setShow ] = useState(true);


    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow}/>
                
            </SubContainer>
        </SubLayout>
    );
}

export default ReviewWrite;