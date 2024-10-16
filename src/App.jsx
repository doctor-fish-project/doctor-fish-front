import { Global } from "@emotion/react";
import { reset } from "./style/common";
import { Route, Routes, useLocation } from "react-router-dom";
import IndexPage from "./pages/userpage/IndexPage/IndexPage";
import DashBoard from "./pages/userpage/DashBoard/DashBoard";
import ReservationPage from "./pages/userpage/ReservationPage/ReservationPage";
import ReservationListPage from "./pages/userpage/ReservationListPage/ReservationListPage";
import ReviewPage from "./pages/userpage/ReviewPage/ReviewPage";
import AdminSigninPage from "./pages/adminpage/AdminSigninPage/AdminSigninPage";
import AdminDashBoard from "./pages/adminpage/AdminDashBoard/AdminDashBoard";
import AuthHook from "./hooks/AuthHook";
import AdminReservationAllPage from "./pages/adminpage/AdminReservationAllPage/AdminReservationAllPage";
import AdminReservationTodayPage from "./pages/adminpage/AdminReservationTodayPage/AdminReservationTodayPage";
import AdminReviewPage from "./pages/adminpage/AdminReviewPage/AdminReviewPage";
import AdminNoticePage from "./pages/adminpage/AdminNoticePage/AdminNoticePage";
import AdminSettingPage from "./pages/adminpage/AdminSettingPage/AdminSettingPage";
import AdminUsersPage from "./pages/adminpage/AdminUsersPage/AdminUsersPage";
import { useRecoilState } from "recoil";
import { categoryIdAtom } from "./atoms/adminAtoms";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { instance } from "./apis/utils/instance";

function App() {
    AuthHook()
    // const location = useLocation();

    // const [categoryId, setCategoryId] = useRecoilState(categoryIdAtom);

    // useEffect(() => {
    //     categorys?.data?.data?.map(category => {
    //         console.log(location.pathname)
    //         if(location.pathname === category.link) {
    //             setCategoryId(category.id)
    //             return
    //         }  
    //     })
    // }, [])

    // const categorys = useQuery(
    //     ["categorysQuery"],
    //     async () => await instance.get("/category"),
    //     {
    //         enabled: true,
    //         refetchOnWindowFocus: false,
    //         retry: 0
    //     },
    // )
    // console.log(categoryId)
    return (
        <>
            <Global styles={reset} />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/dashboard/*" element={<DashBoard />} />
                <Route path="/reservation" element={<ReservationPage />}/>
                <Route path="/reservationlist" element={<ReservationListPage />}/>
                <Route path="/review/*" element={<ReviewPage />}/>

                <Route path="/admin/signin" element={<AdminSigninPage />} />
                <Route path="/admin/dashboard/*" element={<AdminDashBoard />} />
                <Route path='/admin/users' element={<AdminUsersPage />} />
                <Route path='/admin/reservation' element={<AdminReservationAllPage />} />
                <Route path='/admin/reservationtoday' element={<AdminReservationTodayPage />} />
                <Route path='/admin/review' element={<AdminReviewPage />} />
                <Route path='/admin/notice' element={<AdminNoticePage />} />
                <Route path='/admin/setting' element={<AdminSettingPage />} />
                <Route path= "/admin/*" element={<AdminSigninPage />} />
            </Routes>
        </>
        
    );
}

export default App;
