import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import ReactSelect from 'react-select';
import { TABLEHEADER, TIMETEST } from '../../../constants/admin/test';
import AdminPageLayout from '../../../components/admincomponents/AdminPageLayout/AdminPageLayout';
import AdminTableLayout from '../../../components/admincomponents/adminList/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminList/AdminTableHeader/AdminTableHeader';

function AdminLeaveAddPage(props) {

    return (
        <AdminContainer>
            <AdminPageLayout title={"연차 신청"}>
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
                    <AdminTableLayout>
                        <AdminTableHeader tableheaders={TABLEHEADER}>
                            {/* No, 이름, 연차사유, 신청일, 시작일, 종료일 */}
                            <tbody css={s.body}>
                                {
                                    TABLEHEADER.map((tableheader, idx) => 
                                    <tr key={idx}>
                                        <td>{tableheader.content}</td>
                                        <td>{tableheader.content}</td>
                                        <td>{tableheader.content}</td>
                                        <td>{tableheader.content}</td>
                                        <td>{tableheader.content}</td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </AdminTableHeader>
                    </AdminTableLayout>
                </div>
            </AdminPageLayout>
        </AdminContainer>
    );
}

export default AdminLeaveAddPage;