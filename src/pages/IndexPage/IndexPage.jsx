import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import MainContainer from '../../components/usercomponents/MainContainer/MainContainer';
import MainLayout from '../../components/usercomponents/MainLayout/MainLayout';
import { RiHome2Line } from "react-icons/ri";
import Loading from '../../components/usercomponents/Loading/Loading';

function IndexPage(props) {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])
    
    return (
        <MainLayout>
            <MainContainer>
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
                                <RiHome2Line />
                                <button>메인화면 바로가기</button>
                            </div>
                            <div css={s.imgBox}>
                                <img src="/cloud.png" alt="" />
                            </div>
                        </div>
                        <div css={s.loginContainer}>
                            <div css={s.loginTitle}>
                                <p>로그인 & 회원가입</p>
                            </div>
                            <div css={s.loginButtonBox}>
                                <button>로그인</button>
                                <button>회원가입</button>
                                <button>관리자 로그인</button>
                            </div>
                        </div>
                    </div>
                }
            </MainContainer>
        </MainLayout>
    );
}

export default IndexPage;