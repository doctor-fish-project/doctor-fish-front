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

function App() {
    return (
        <>
            <Global styles={reset} />
            <Routes>
                <Route path="/*" element={<IndexPage />} />
                <Route path="/dashboard/*" element={<DashBoard />} />
                <Route path="/dashboard/reservation" element={<ReservationPage />}/>
                <Route path="/dashboard/reservationlist" element={<ReservationListPage />}/>
                <Route path="/dashboard/review/*" element={<ReviewPage />}/>

                <Route path="/admin/signin" element={<AdminSigninPage />} />
                <Route path="/admin/dashboard" element={<AdminDashBoard />} />
            </Routes>
        </>
    );
}

export default App;
