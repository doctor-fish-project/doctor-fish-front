import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminChartBar from '../../../components/admincomponents/AdminChartBar/AdminChartBar';

function AdminDashBoard(props) {
    return (
        <AdminMainLayout >
            <AdminContainer>
                <div css={s.layout}>
                    <div css={s.container}>
                        <div css={s.reservationBox}>
                            <p>예약현황</p>
                            <div css={s.reservationInfoBox}>
                                <span>2023-09-12 10:00</span>
                                <div>백승주</div>
                                <div>내과 | 의사명</div>
                                <div>status1</div>
                            </div>
                            <div css={s.buttonBox}>
                                <button>더보기</button>
                            </div>
                        </div>
                        <div css={s.reservationBox}>
                            <p>예약현황</p>
                            <div>
                                <div>2023-09-12 10:00</div>
                                <div>백승주</div>
                                <div>내과 | 의사명</div>
                                <div>status1</div>
                            </div>
                            <button>더보기</button>
                        </div>
                    </div>
                    <div css={s.container}>
                        <div></div>
                        <div css={s.contentBox}>
                            <p>예약통계</p>
                            <AdminChartBar />
                        </div>
                    </div>
                </div>
            </AdminContainer>
        </AdminMainLayout>

    );
}

export default AdminDashBoard;