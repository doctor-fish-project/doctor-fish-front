import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../../../components/admincomponents/AdminMainLayout/AdminMainLayout';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import AdminPageContainer from '../../../components/admincomponents/AdminPageContainer/AdminPageContainer';
import ReactSelect from 'react-select';
import { TIMETEST } from '../../../constants/admin/test';

function AdminLeaveAddPage(props) {

    return (
        <AdminMainLayout>
            <AdminContainer>
                <AdminPageContainer title={"연차 신청"}>
                    <div css={s.layout}>
                        <div css={s.topContainer}>
                            <div css={s.imgBox}>
                                <img src="" alt="" />
                            </div>
                            <div css={s.inputContainer}>
                                <div css={s.infoBox}>
                                    <p>이름: 의사이름</p>
                                </div>
                                <div css={s.inputBox}>
                                    <p>연차 날짜: </p>
                                    <input type="date" />
                                    ~
                                    <input type="date" />
                                </div>
                                <div css={s.inputBox}>
                                    <p>연차 시간: </p>
                                    <ReactSelect 
                                        placeholder="시간을 선택하세요"
                                        styles={{
                                            control: (style) => ({
                                                ...style,
                                                margin: "0",
                                                padding: "0px 11px",
                                                border: "none",
                                                outline: "none",
                                                boxShadow: "none",
                                                ":active": {
                                                    border: "none",
                                                },
                                                ":focus": {
                                                    border: "none",
                                                    boxShadow: "none"
                                                }
                                            }),
                                            indicatorSeparator: () => null
                                        }}
                                        options={TIMETEST}
                                    />
                                    ~
                                    <ReactSelect 
                                        placeholder="시간을 선택하세요"
                                        styles={{
                                            control: (style) => ({
                                                ...style,
                                                margin: "0",
                                                padding: "0px 11px",
                                                border: "none",
                                                outline: "none",
                                                boxShadow: "none",
                                                ":active": {
                                                    border: "none",
                                                },
                                                ":focus": {
                                                    border: "none",
                                                    boxShadow: "none"
                                                }
                                            }),
                                            indicatorSeparator: () => null,
                                        }}
                                        options={TIMETEST}
                                    />
                                </div>
                                <div css={s.textareaBox}>
                                    <label>연차 사유</label>
                                    <textarea name="" id=""></textarea>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </AdminPageContainer>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminLeaveAddPage;