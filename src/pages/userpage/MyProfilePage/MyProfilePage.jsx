import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import SubLayout from '../../../components/usercomponents/SubLayout/SubLayout';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useQueryClient } from 'react-query';

function MyProfilePage(props) {
    const [isShow, setShow] = useState(true);

    const queryClient = useQueryClient()
    const userInfo = queryClient.getQueryData("userInfoQuery")
    console.log(userInfo)

    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <BackButton setShow={setShow} />
                <div css={s.layout}>
                    <img src="" alt="" />
                    <div css={s.userInfo}>
                        <input type="text" name="email" id="" /> 
                        <input type="text" name="name" id="" />
                        <input type="text" name="address" id="" />
                        <input type="text" name="phoneNumber" id="" />
                        <div>
                            <button>회원정보 변경</button>
                            <button>비밀번호 변경</button>
                        </div>
                    </div>
                    <div css={s.userRecord}>
                        <button>내가 쓴 리뷰</button>
                        <button>내가 쓴 댓글</button>
                    </div>
                    <div>

                    </div>
                </div>
            </SubContainer>
        </SubLayout>

    );
}

export default MyProfilePage;