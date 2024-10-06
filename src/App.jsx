import { Global } from "@emotion/react";
import { reset } from "./style/common";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/userpage/IndexPage/IndexPage";
import DashBoard from "./pages/userpage/DashBoard/DashBoard";
import ReservationPage from "./pages/userpage/ReservationPage/ReservationPage";
import ReservationListPage from "./pages/userpage/ReservationListPage/ReservationListPage";
import ReviewPage from "./pages/userpage/ReviewPage/ReviewPage";

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
            </Routes>
        </>
    );
}

export default App;
