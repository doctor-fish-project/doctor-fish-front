import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Signup from '../modal/Signup/Signup';
import Signin from '../modal/Signin/Signin';
import AdminSignin from '../modal/AdminSignin/AdminSignin';

function MainContainer({ children }) {
    const [ signupModalElement, setSignupModalElement ] = useState(<></>);
    const [ signinModalElement, setSigninModalElement ] = useState(<></>);
    const [ adminSigninModalElement, setAdminSigninModalElement ] = useState(<></>);

    const containerRef = useRef();

    useEffect(() => {
        if(!!containerRef) {
            setSignupModalElement(<Signup containerRef={containerRef} />)
            setSigninModalElement(<Signin containerRef={containerRef} />)
            setAdminSigninModalElement(<AdminSignin containerRef={containerRef} />)
        }
    }, [containerRef])

    return (
        <div css={s.layout} ref={containerRef}>
            {signupModalElement}
            {signinModalElement}
            {adminSigninModalElement}
            {children}
        </div>
    );
}

export default MainContainer;