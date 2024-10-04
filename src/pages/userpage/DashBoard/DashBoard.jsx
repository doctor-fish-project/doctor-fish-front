import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { AiFillSound } from "react-icons/ai"
import { FaUser } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";
import SubLayout from '../../../components/usercomponents/SubLayout/SubLayout';
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import DashBoardTopBar from '../../../components/usercomponents/DashBoardTopBar/DashBoardTopBar';

function DashBoard(props) {
    return (
        <SubLayout>
            <SubContainer>
                <DashBoardTopBar>
                    <div css={s.layout}>
                        <div css={s.reviewBox}>
                            <div css={s.reviewIcon}><AiFillSound /></div>
                            <div css={s.reviewTitle}>안녕하세요</div>
                        </div>
                        <div css={s.userInfoContainer}>
                            <div css={s.userInfoBox}>
                                <div css={s.userBox}>
                                    <div>홍길동 님</div>
                                </div>
                                <div css={s.userButtonBox}>
                                    <button><FaUser />내정보</button>
                                </div>
                            </div>
                        </div>
                        <div css={s.planTitleBox}>
                            <p>내일정</p>
                            <div css={s.planButtonBox}>
                                <button>전체보기<CiCircleChevRight /></button>
                            </div>
                        </div>
                        <div css={s.planContentContainer}>
                            <div css={s.dateBox}>
                                <div>
                                    <p>2024년 10월 04일 금요일</p>
                                    <p>오전 10:10</p>
                                </div>
                                <div css={s.buttonBox}>예약완료</div>
                            </div>
                            <div css={s.doctorBox}>
                                의사정보
                            </div>
                        </div>
                    </div>
                </DashBoardTopBar>
            </SubContainer>
        </SubLayout>
    );
}

export default DashBoard;