import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import DoctorBox from '../../../components/usercomponents/reservationPage/DoctorBox/DoctorBox';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';
import { useQueryClient } from 'react-query';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';

function ReservationPage(props) {
    const queryClient = useQueryClient();
    const authState = queryClient.getQueryState("accessTokenValidQuery")
    const doctors = queryClient.getQueryData("doctorsQuery")

    return (
        <UserSubContainer>
            <DashBoardTopBar title={"예약하기"} />
            {
                authState?.data?.data &&
                <div css={s.layout}>
                    {
                        doctors?.data?.doctors.map(doctor =>
                            <DoctorBox key={doctor.id} doctor={doctor} />
                        )
                    }
                </div>
            }
        </UserSubContainer>
    );
}

export default ReservationPage;