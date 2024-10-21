import { Global } from "@emotion/react";
import { reset } from "./style/common";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./routes/AdminRoute/AdminRoute";
import UserRoute from "./routes/UserRoute/UserRoute";

function App() {
    return (
        <>
            <Global styles={reset} />
            <Routes>
                <Route path="/admin/*" element={<AdminRoute />} />
                <Route path="/*" element={<UserRoute />} />
            </Routes>
        </>
    );
}

export default App;
