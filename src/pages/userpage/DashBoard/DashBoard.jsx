import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaUser, FaRegBell } from "react-icons/fa";
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import TodayReservationBox from '../../../components/usercomponents/dashBoard/TodayReservationBox/TodayReservationBox';
import MyProfilePage from '../MyProfilePage/MyProfilePage';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { bellAlramModalAtom, signinModalAtom } from '../../../atoms/modalAtoms';
import BoxTopBar from '../../../components/usercomponents/dashBoard/BoxTopBar/BoxTopBar';
import DoctorListPage from '../DoctorListPage/DoctorListPage';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import NoticeListPage from '../NoticeListPage/NoticeListPage';
import { alarmMessageAtom, alarmStateAtom, announcementAlarmsAtom, reservationAlarmsAtom } from '../../../atoms/dashboardAtoms';

function DashBoard(props) {
    const nav = useNavigate();

    const [reservationAlarms, setReservationAlarms] = useRecoilState(reservationAlarmsAtom);
    const [announcementAlarms, setAnnouncementAlarms] = useRecoilState(announcementAlarmsAtom);

    const setBellAlarmOpen = useSetRecoilState(bellAlramModalAtom);
    const setAlarmState = useSetRecoilState(alarmStateAtom);
    const setSigninModalOpen = useSetRecoilState(signinModalAtom);

    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery")
    const userInfo = queryClient.getQueryData("userInfoQuery");

    const [ announcementIds, setAnnouncementIds] = useState([]);
    const [index, setIndex] = useState(0);

    const reservationAlarm = useQuery(
        ["reservationAlarmQuery"],
        async () => {
            return instance.get("/alarm/reservation");
        },
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                if (response?.data?.length > 0) {
                    setReservationAlarms(response?.data)
                    setAlarmState(true);
                    return
                }
                setAlarmState(false)
            }
        }
    )

    const announcementAlarm = useQuery(
        ["announcementAlarmQuery"],
        async () => {
            return instance.get("/alarm/announcement");
        },
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                if (response?.data?.length > 0) {
                    setAnnouncementAlarms(response?.data)
                    setAnnouncementIds(response?.data?.map(resp => resp.announceId))
                    setAlarmState(true);
                    return
                }
                setAlarmState(false)
            }
        }
    )

    const todayReservations = useQuery(
        ["todayReservationsQuery"],
        async () => await instance.get("/reservation/today"),
        {
            enabled: authState?.data?.data,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const modifyReservationAlarmStatus = useMutation(
        async () => await instance.put("/alarm"),
        {
            onSuccess: response => {
                setAlarmState(false)
            }
        }
    )

    const modifyAnnouncementAlarmStatus = useMutation(
        async () => await instance.post("/alarm", announcementIds),
        {
            onSuccess: response => {
                setAlarmState(false)
            }
        }
    )

    const handleNextReservationOnClick = (index) => {
        setIndex(todayReservations.data.data.reservations.length === index + 1 ? 0 : index + 1);
    }

    const handleSigninOnClick = () => {
        nav("/");
        setSigninModalOpen(true)
    }

    const handleMyProfileOnClick = () => {
        nav("/dashboard/myprofile")
    }

    const handleDoctorListOnClick = () => {
        nav("/dashboard/doctor")
    }

    const handleNoticeListPageOnClick = () => {
        nav("/dashboard/notice")
    }

    const handleBellAlramOnClick = () => {
        setBellAlarmOpen(true);
        setAlarmState(false);
        modifyReservationAlarmStatus.mutateAsync().catch(() => { })
        modifyAnnouncementAlarmStatus.mutateAsync().catch(() => { })
        reservationAlarm.refetch();
        announcementAlarm.refetch();
    }

    return (
        <>
            <UserSubContainer>
                <DashBoardTopBar title={"MEDIBOOK"} icon={<FaRegBell />} onClick={() => handleBellAlramOnClick()} />
                <div css={s.layout}>
                    <div css={s.userInfoBox}>
                        {
                            (authState?.status === "success" && authState?.data?.data) ?
                                <div onClick={handleMyProfileOnClick}>
                                    <p><FaUser />내정보</p>
                                    <div>
                                        <p>{userInfo?.data?.name}님</p>
                                    </div>
                                </div>
                                :
                                <div css={s.defaultBox}>
                                    <button onClickCapture={handleSigninOnClick}>로그인</button>
                                </div>
                        }
                    </div>
                    <div css={s.reservationBox}>
                        <BoxTopBar title1={"예약 일정"} />
                        {
                            (authState?.status === "success" && authState?.data?.data) ?
                                !!todayReservations?.data?.data?.reservations.length ?
                                    <div css={s.reservationListSlider(index)}>
                                        {
                                            todayReservations?.data?.data?.reservations?.map((reservation, idx) =>
                                                <TodayReservationBox key={reservation?.id} reservation={reservation} length={todayReservations?.data?.data?.reservations?.length}
                                                    link={"/reservationlist"} onClick={() => handleNextReservationOnClick(idx)} />
                                            )
                                        }
                                    </div> :
                                    <div css={s.defaultBox}>
                                        <p>예약이 없습니다.</p>
                                    </div> :
                                <div css={s.defaultBox}>
                                    <p>로그인 후 이용가능합니다.</p>
                                </div>
                        }
                    </div>
                    <div css={s.pageBox}>
                        <div onClick={handleNoticeListPageOnClick}>
                            <p>공지사항</p>
                            <img src="/공지사항.png" alt="" />
                        </div>
                        <div onClick={handleDoctorListOnClick}>
                            <p>의료진 소개</p>
                            <img src="/의사.png" alt="" />
                        </div>
                    </div>
                    <div css={s.pageBox}>
                        <div>
                            <p>병원소개</p>
                            <img src="/금지.png" alt="" />
                        </div>
                        <div>
                            <p>오시는 길</p>
                            <img src="/금지.png" alt="" />
                        </div>
                    </div>
                </div>
            </UserSubContainer>
            <Routes>
                <Route path='/myprofile/*' element={<MyProfilePage />} />
                <Route path='/doctor/*' element={<DoctorListPage />} />
                <Route path='/notice/*' element={<NoticeListPage />} />
            </Routes>
        </>
    );
}

export default DashBoard;