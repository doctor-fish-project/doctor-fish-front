import React, { useEffect } from 'react';
import { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { instance } from "../apis/utils/instance";
import { useSetRecoilState } from 'recoil';
import { signinModalAtom } from '../atoms/modalAtoms';
import Swal from 'sweetalert2';

function AuthHook(props) {
    const nav = useNavigate();
    const location = useLocation();

    const setSigninModalState = useSetRecoilState(signinModalAtom);

    const [ref, setRef] = useState(true);


    useEffect(() => {
        if (!ref) {
            setRef(true);
        }
    }, [location.pathname]);

    const accessTokenValid = useQuery(
        ["accessTokenValidQuery"],
        async () => {
            setRef(false);
            return await instance.get("/auth/access", {
                params: {
                    accessToken: localStorage.getItem("accessToken")
                }
            });
        },
        {
            enabled: ref,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                const permitPaths = ["/"];
                for (let permitPath of permitPaths) {
                    if (location.pathname === permitPath) {
                        nav("/dashboard", { replace: true });
                        break;
                    }
                }
            },
            onError: error => {
                const authPaths = ["/reservation", "/reservationlist", "/review/write"];
                for (let authPath of authPaths) {
                    if (location.pathname.startsWith(authPath)) {
                        Swal.fire({
                            icon: 'info',
                            title: '사용자 전용 페이지',
                            text: '로그인 하시겠습니까?',
                            backdrop: false,
                            showCancelButton: true,
                            confirmButtonText: '확인',
                            cancelButtonText: '취소',
                            customClass: {
                                popup: 'custom-auth-swal',
                                container: 'container',
                                confirmButton: 'confirmButton',
                            }
                        }).then(result => {
                            if (result.isConfirmed) {
                                nav("/")
                                setSigninModalState(true);
                            } else if (result.isDismissed) {
                                nav("/dashboard")
                            }
                        })
                        break;
                    }
                }
            }
        }
    );
}

export default AuthHook;
