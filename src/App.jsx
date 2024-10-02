import { Global } from "@emotion/react";
import { reset } from "./style/common";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";

function App() {
    return (
        <>
            <Global styles={reset} />
            <Routes>
                <Route path="/*" element={<IndexPage />} />
            </Routes>
        </>
    );
}

export default App;
