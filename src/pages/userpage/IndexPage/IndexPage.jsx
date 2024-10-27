import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { RiHome2Line } from "react-icons/ri";
import Loading from '../../../components/usercomponents/Loading/Loading';
import { useSetRecoilState } from 'recoil';
import { signinModalAtom, signupModalAtom } from '../../../atoms/modalAtoms';
import { useNavigate } from 'react-router-dom';
import UserMainContainer from '../../../components/usercomponents/UserMainContainer/UserMainContainer';

function IndexPage(props) {
    const nav = useNavigate();

    const setSigninModalState = useSetRecoilState(signinModalAtom);
    const setSignupModalState = useSetRecoilState(signupModalAtom);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])

    const handleDashboardOnClick = () => {
        nav("/dashboard")
    }

    const handleSigninModalOnClick = () => {
        setSigninModalState(true)
    }
 
    const handleSignupModalOnClick = () => {
        setSignupModalState(true)
    }

    return (
        <UserMainContainer>
            {
                isLoading ? <Loading />
                    :
                    <div css={s.layout}>
                        <div css={s.imgBox}>
                            <img src="/로고.png" alt="" />
                        </div>
                        <div css={s.buttonBox}>
                            <div>
                                <button onClick={handleSigninModalOnClick}>로그인</button>
                            </div>
                            <div>
                                <button onClick={handleSignupModalOnClick}>회원가입</button>
                            </div>
                        </div>
                        <div css={s.singupBox}>
                            <button onClick={handleDashboardOnClick}>로그인 없이 이용하기</button>
                        </div>
                    </div>
            }
        </UserMainContainer>
    );
}

export default IndexPage;