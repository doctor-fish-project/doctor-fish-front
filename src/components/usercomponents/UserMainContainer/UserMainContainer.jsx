import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Signup from '../userModal/Signup/Signup';
import Signin from '../userModal/Signin/Signin';

function UserMainContainer({ children }) {
    const [ signupModalElement, setSignupModalElement ] = useState(<></>);
    const [ signinModalElement, setSigninModalElement ] = useState(<></>);

    const containerRef = useRef();

    useEffect(() => {
        if(!!containerRef) {
            setSignupModalElement(<Signup containerRef={containerRef} />)
            setSigninModalElement(<Signin containerRef={containerRef} />)
        }
    }, [containerRef])

    return (
        <div css={s.layout} ref={containerRef}>
            {signupModalElement}
            {signinModalElement}
            {children}
        </div>
    );
}

export default UserMainContainer;