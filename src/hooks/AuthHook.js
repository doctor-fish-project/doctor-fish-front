import React, { useEffect } from 'react';
import { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { instance } from "../apis/utils/instance";



function AuthHook(props) {
    const nav = useNavigate();
    const location = useLocation();

    const [ ref, setRef ] = useState(true);

    useEffect(() => {
        if(!ref) {
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
                for(let permitPath of permitPaths) {
                    if(location.pathname === permitPath) {
                        alert("로그아웃 후 이용해주세요");
                        nav("/dashboard");
                        break;
                    }
                }
            },
            onError: error => {
                const authPaths = ["/reservation", "/reservationlist", "/review"];
                for(let authPath of authPaths) {
                    if(location.pathname.startsWith(authPath)) {
                        alert("로그인 후 이용해주세요");
                        nav("/");
                        break;
                    }
                }
            }
        }
    );
}

export default AuthHook;
