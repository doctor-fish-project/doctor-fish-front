import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Signup from '../userModal/Signup/Signup';
import Signin from '../userModal/Signin/Signin';
import FindUser from '../userModal/FindUser/FindUser';
import ResetPassword from '../userModal/ResetPassword/ResetPassword';

function UserMainContainer({ children }) {
    const [ signupModalElement, setSignupModalElement ] = useState(<></>);
    const [ signinModalElement, setSigninModalElement ] = useState(<></>);
    const [ findUserModalElement, setFindUserModalElement] = useState(<></>);
    const [ resetPasswordModalElement, setResetPasswordModalElement] = useState(<></>);

    const containerRef = useRef();

    useEffect(() => {
        if(!!containerRef) {
            setSignupModalElement(<Signup containerRef={containerRef} />)
            setSigninModalElement(<Signin containerRef={containerRef} />)
            setFindUserModalElement(<FindUser containerRef={containerRef}/>)
            setResetPasswordModalElement(<ResetPassword containerRef={containerRef} />)
        }
    }, [containerRef])

    return (
        <div css={s.layout} ref={containerRef}>
            {signupModalElement}
            {signinModalElement}
            {findUserModalElement}
            {resetPasswordModalElement}
            {children}
        </div>
    );
}

export default UserMainContainer;