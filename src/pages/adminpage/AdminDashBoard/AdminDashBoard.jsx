import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import { Route, Routes } from 'react-router-dom';
import AdminUsers from '../../../components/admincomponents/AdminUsers/AdminUsers';
import AdminReservation from '../../../components/admincomponents/AdminReservation/AdminReservation';
import AdminReservationAll from '../../../components/admincomponents/AdminReservationAll/AdminReservationAll';
import AdminReview from '../../../components/admincomponents/AdminReview/AdminReview';
import AdminNotice from '../../../components/admincomponents/AdminNotice/AdminNotice';
import AdminSetting from '../../../components/admincomponents/AdminSetting/AdminSetting';
import AdminChartBar from '../../../components/admincomponents/AdminChartBar/AdminChartBar';

function AdminDashBoard(props) {
    return (

        <AdminMainLayout >
            <AdminContainer>
                <div css={s.layout}>
                    <div css={s.container}>
                        <div>
                            <AdminChartBar />
                        </div>
                        <div>
                            <AdminChartBar />
                        </div>
                    </div>
                    <div css={s.container}>
                        <div>
                            <AdminChartBar />
                        </div>
                        <div>
                            <AdminChartBar />
                        </div>
                    </div>
                </div>
            </AdminContainer>
        </AdminMainLayout>



    );
}

export default AdminDashBoard;