import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { adminInstance } from '../apis/utils/instance';

function AdminAuthHook(props) {

    const nav = useNavigate();
    const location = useLocation();

    const [ref, setRef] = useState(true);

    useEffect(() => {
        if (!ref) {
            setRef(true);
        }
    }, [location.pathname]);

    const accessAdminTokenValid = useQuery(
        ["accessAdminTokenValidQuery"],
        async () => {
            setRef(false);
            return await adminInstance.get("/admin/auth/access", {
                params: {
                    adminAccessToken: localStorage.getItem("adminAccessToken")
                }
            });
        },
        {
            enabled: ref,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                const permitPaths = ["/admin/signin"];
                for (let permitPath of permitPaths) {
                    if (location.pathname === permitPath) {
                        nav("/admin/dashboard", { replace: true });
                        break;
                    }
                }
            },
            onError: error => {
                const authPaths = ["/admin"];
                for (let authPath of authPaths) {
                    if (location.pathname.startsWith(authPath)) {
                        nav("/admin/signin")
                        break;
                    }
                }
            }
        }
    );
}

export default AdminAuthHook;