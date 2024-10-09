import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { AiFillSound } from "react-icons/ai"
import { FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';
import { Route, Routes, useNavigate } from 'react-router-dom';
import YearBox from '../../../components/usercomponents/reservationListPage/YearBox/YearBox';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import MyProfile from '../../../components/usercomponents/dashBoard/MyProfile/MyProfile';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function DashBoard(props) {

    const nav = useNavigate();
    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery");

    const userInfo = useQuery(
        ["userInfoQuery"],
        async () => await instance.get("/user/me"),
        {
            enabled: authState.data?.data,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )
    
    const handleReservationListOnClick = () => {
        nav("/reservationlist")
    }

    const handleMyProfileOnClick = () => {
        nav("/dashboard/myprofile")
    }

    return (
        <MainLayout>
            <SubContainer>
                <DashBoardTopBar title={"MEDIBOOK"}/>   
                <div css={s.layout}>
                    <div css={s.noticeBox}>
                        <AiFillSound />안녕하세요
                    </div>
                    <div css={s.userInfoBox}>
                        <p>{userInfo.data?.data?.name}</p>
                        <div css={s.userButtonBox}>
                            <button onClick={handleMyProfileOnClick}><FaUser />내정보</button>
                        </div>
                    </div>
                    <div css={s.reservationBox}>
                        <p>예약 일정</p>
                        <button onClick={handleReservationListOnClick}>전체보기<IoIosArrowForward /></button>
                    </div>
                    {/* <YearBox year={2024}/> */}
                    <div css={s.doctorBox}>
                        각각의 의사 정보 컴포넌트로 빼기
                    </div>
                </div>
            </SubContainer>
            <Routes>
                <Route path='/myprofile' element={<MyProfile />}/>
            </Routes>
        </MainLayout>
    );
}

export default DashBoard;