import { Global } from "@emotion/react";
import { reset } from "./style/common";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/userpage/IndexPage/IndexPage";
import DashBoard from "./pages/userpage/DashBoard/DashBoard";
import ReservationPage from "./pages/userpage/ReservationPage/ReservationPage";
import ReservationListPage from "./pages/userpage/ReservationListPage/ReservationListPage";
import ReviewPage from "./pages/userpage/ReviewPage/ReviewPage";
import AdminSigninPage from "./pages/adminpage/AdminSigninPage/AdminSigninPage";
import AdminDashBoard from "./pages/adminpage/AdminDashBoard/AdminDashBoard";
import AdminUsers from "./components/admincomponents/AdminUsers/AdminUsers";
import AdminReservation from "./components/admincomponents/AdminReservation/AdminReservation";
import AdminReservationAll from "./components/admincomponents/AdminReservationAll/AdminReservationAll";
import AdminReview from "./components/admincomponents/AdminReview/AdminReview";
import AdminNotice from "./components/admincomponents/AdminNotice/AdminNotice";
import AdminSetting from "./components/admincomponents/AdminSetting/AdminSetting";
import AuthHook from "./hooks/AuthHook";

function App() {
    AuthHook()
    return (
        <>
            <Global styles={reset} />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/dashboard/*" element={<DashBoard />} />
                <Route path="/dashboard/reservation" element={<ReservationPage />}/>
                <Route path="/dashboard/reservationlist" element={<ReservationListPage />}/>
                <Route path="/dashboard/review/*" element={<ReviewPage />}/>

                <Route path="/admin/signin" element={<AdminSigninPage />} />
                <Route path="/admin/dashboard/*" element={<AdminDashBoard />} />

                <Route path='/admin/users' element={<AdminUsers />} />
                <Route path='/admin/reservation' element={<AdminReservation />} />
                <Route path='/admin/reservationnow' element={<AdminReservationAll />} />
                <Route path='/admin/review' element={<AdminReview />} />
                <Route path='/admin/notice' element={<AdminNotice />} />
                <Route path='/admin/setting' element={<AdminSetting />} />
                <Route path="/reservation" element={<ReservationPage />}/>
                <Route path="/reservationlist" element={<ReservationListPage />}/>
                <Route path="/review/*" element={<ReviewPage />}/>
            </Routes>
        </>
        
    );
}

export default App;
