import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { RiHome2Line } from "react-icons/ri";
import Loading from '../../../components/usercomponents/Loading/Loading';
import { useSetRecoilState } from 'recoil';
import { signinModalAtom } from '../../../atoms/modalAtoms';
import { useNavigate } from 'react-router-dom';
import UserMainContainer from '../../../components/usercomponents/UserMainContainer/UserMainContainer';

function IndexPage(props) {
    const nav = useNavigate();

    const setSigninModalState = useSetRecoilState(signinModalAtom);

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

    return (
        <UserMainContainer>
            {
                isLoading ? <Loading />
                    :
                    <div css={s.layout}>
                        <div css={s.container}>
                            <div css={s.titleBox}>
                                <h1>MEDIBOOK</h1>
                            </div>
                            <div css={s.contentBox}>
                                <p>MEDIBOOK</p>
                                <p>예약 사이트 어플</p>
                            </div>
                            <div css={s.buttonBox}>

                                <button onClick={handleDashboardOnClick}><RiHome2Line />메인화면 바로가기</button>
                            </div>
                            <div css={s.imgBox}>
                                <img src="/cloud.png" alt="" />
                            </div>
                        </div>
                        <div css={s.loginButtonBox}>
                            <button onClick={handleSigninModalOnClick}>로그인 & 회원가입</button>
                        </div>
                    </div>
            }
        </UserMainContainer>
    );
}

export default IndexPage;