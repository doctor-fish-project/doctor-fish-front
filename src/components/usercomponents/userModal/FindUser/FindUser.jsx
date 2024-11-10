import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { findUserModalAtom, resetPasswordModalAtom } from '../../../../atoms/modalAtoms';
import { useRecoilState, useSetRecoilState } from 'recoil';
import ModalLayout from '../ModalLayout/ModalLayout';
import CancelButton from '../CancelButton/CancelButton';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../../apis/utils/instance';
import Swal from 'sweetalert2';
import { userEmailAtom } from '../../../../atoms/userAtoms';

function FindUser({ containerRef }) {
    const [findUserOpen, setFindUserOpen] = useRecoilState(findUserModalAtom);
    const setResetPasswordOpen = useSetRecoilState(resetPasswordModalAtom);
    const setUserEmail = useSetRecoilState(userEmailAtom);

    const [ani, setAni] = useState("userModalOpen")
    const [checkStatus, setCheckStatus] = useState(false);
    const [userInput, setUserInput] = useState({
        email: "",
        name: ""
    })

    const findUser = useMutation(
        async () => await instance.post("/auth/check", userInput),
        {
            onSuccess: response => {
                Swal.fire({
                    icon: 'info',
                    text: '인증메일을 전송하였습니다.',
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
                setCheckStatus(true);
            },
            onError: error => {
                if (userInput.email.trim() === "" || userInput.name.trim() === "") {
                    Swal.fire({
                        icon: 'info',
                        text: '사용자 정보를 입력해주세요.',
                        backdrop: false,
                        showConfirmButton: false,
                        timer: 1000,
                        customClass: {
                            popup: 'custom-timer-swal',
                            container: 'container'
                        }
                    })
                    return
                }
                Swal.fire({
                    icon: 'info',
                    text: '일치하는 사용자를 찾을 수 없습니다.',
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            }
        }
    )

    const resetPasswordStatus = useQuery(
        ["ResetPasswordStatusQuery"],
        async () => await instance.get("/auth/password/status", {
            params: {
                'email': userInput.email,
                'name': userInput.name
            }
        }),
        {
            enabled: checkStatus,
            refetchOnWindowFocus: false,
            refetchInterval: 5000,
            onSuccess: response => {
                if (response?.data?.status === 1) {
                    setUserEmail(response?.data?.email);
                    setCheckStatus(false);
                    closeModal();
                    setTimeout(() => {
                        setResetPasswordOpen(true)
                    }, 400)
                }
            }
        }
    )

    const handleInputOnChange = (e) => {
        setUserInput(userInput => ({
            ...userInput,
            [e.target.name]: e.target.value
        }))
    }
    const handleOnClcik = () => {
        closeModal();
        setTimeout(() => {
            setResetPasswordOpen(true)
        }, 400)
    }

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setFindUserOpen(false);
        }, 500)
        setUserInput({
            email: "",
            name: ""
        })
    }

    return (
        <ModalLayout containerRef={containerRef} isOpen={findUserOpen} closeModal={closeModal} ani={ani} inset={"auto 0px 0px"} width={"100%"} height={"80%"} borderTop={"1px solid #dbdbdb"}>
            <div css={s.layout}>
                <CancelButton onClick={closeModal} />
                <div css={s.logoBox}>
                    <h2>MEDIBOOK</h2>
                </div>
                <div css={s.inputBox}>
                    <p>이메일</p>
                    <input type="text" placeholder='아이디' name='email' onChange={handleInputOnChange} value={userInput.email} />
                </div>
                <div css={s.inputBox}>
                    <p>이름</p>
                    <input type="text" placeholder='이름' name='name' onChange={handleInputOnChange} value={userInput.name} />
                </div>
                <div css={s.buttonBox}>
                    <button onClick={() => findUser.mutateAsync().catch(() => { })}>인증 이메일 전송</button>
                    {/* <button onClick={handleOnClcik}>인증 이메일 전송</button> */}
                </div>
            </div>
        </ModalLayout>
    );
}

export default FindUser;