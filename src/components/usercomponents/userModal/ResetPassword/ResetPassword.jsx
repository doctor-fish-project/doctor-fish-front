import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { resetPasswordModalAtom, signinModalAtom } from '../../../../atoms/modalAtoms';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ModalLayout from '../ModalLayout/ModalLayout';
import CancelButton from '../CancelButton/CancelButton';
import { useMutation } from 'react-query';
import { instance } from '../../../../apis/utils/instance';
import Swal from 'sweetalert2';
import { userEmailAtom } from '../../../../atoms/userAtoms';

function ResetPassword({ containerRef }) {
    const [resetPasswordOpen, setResetPasswordOpen] = useRecoilState(resetPasswordModalAtom);
    const setSigninOpen = useSetRecoilState(signinModalAtom);
    const userEmail = useRecoilValue(userEmailAtom);

    const [ani, setAni] = useState("userModalOpen")
    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
        checkPassword: ""
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        password: <></>,
        checkPassword: <></>,
    });

    useEffect(() => {
        setUserInput(userInput => ({
            ...userInput,
            email: userEmail
        }))
    }, [userEmail])

    const resetPassword = useMutation(
        async () => await instance.put("/auth/user/password", userInput),
        {
            onSuccess: response => {
                Swal.fire({
                    icon: 'success',
                    text: '비밀번호 재설정 성공',
                    backdrop: false,
                    showConfirmButton: false,
                    timer: 1000,
                    willClose: () => {
                        deletePassword.mutateAsync().catch(() => {})
                        setResetPasswordOpen(false)
                        setSigninOpen(true)
                        setUserInput({
                            email: "",
                            password: "",
                            checkPassword: ""
                        })
                        
                    },
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            },
            onError: error => {
                const response = error.response;
                const fieldErrors = response.data.map(fieldError => ({ field: fieldError.field, defaultMessage: fieldError.defaultMessage }))
                showFieldErrorMessage(fieldErrors);
                return
            }
        }
    )

    const deletePassword = useMutation(
        async () => await instance.delete(`/auth/user/password/${userInput.email}`)
    )

    const handleInputOnChange = (e) => {
        setUserInput(userInput => ({
            ...userInput,
            [e.target.name]: e.target.value
        }))
    }

    const showFieldErrorMessage = (fieldErrors) => {
        let EmptyFieldErros = {
            password: <></>,
            checkPassword: <></>,
        };

        for (let fieldError of fieldErrors) {
            EmptyFieldErros = {
                ...EmptyFieldErros,
                [fieldError.field]: <p>{fieldError.defaultMessage}</p>
            }
        }

        setFieldErrorMessages(EmptyFieldErros);
    }

    const closeModal = () => {
        setAni("userModalClose")
        setTimeout(() => {
            setAni("userModalOpen");
            setResetPasswordOpen(false);
        }, 500)
        setUserInput({
            password: "",
            checkPassword: ""
        })
        setFieldErrorMessages({
            password: <></>,
            checkPassword: <></>
        })
    }

    return (
        <ModalLayout containerRef={containerRef} isOpen={resetPasswordOpen} closeModal={closeModal} ani={ani} inset={"auto 0px 0px"} width={"100%"} height={"80%"} borderTop={"1px solid #dbdbdb"}>
            <div css={s.layout}>
                <CancelButton onClick={closeModal} />
                <div css={s.logoBox}>
                    <h2>MEDIBOOK</h2>
                </div>
                <div css={s.inputBox}>
                    <p>새 비밀번호</p>
                    <input type="password" placeholder='새 비밀번호' name='password' onChange={handleInputOnChange} value={userInput.password} />
                    {
                        fieldErrorMessages.password !== "" ? fieldErrorMessages.password : <></>
                    }
                </div>
                <div css={s.inputBox}>
                    <p>비밀번호 확인</p>
                    <input type="password" placeholder='비밀번호 확인' name='checkPassword' onChange={handleInputOnChange} value={userInput.checkPassword} />
                    {
                        fieldErrorMessages.checkPassword !== "" ? fieldErrorMessages.checkPassword : <></>
                    }
                </div>
                <div css={s.buttonBox}>
                    <button onClick={() => resetPassword.mutateAsync().catch(() => { })}>비밀번호 재설정 하기</button>
                </div>
            </div>
        </ModalLayout>
    );
}

export default ResetPassword;