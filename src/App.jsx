import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import "./styles/global.scss";
import LoginPage from "./pages/LoginPage/";
import RequireAuth from "./components/auth/RequireAuth.jsx";
import PersistLogin from "./components/auth/PersistLogin.jsx";
import Missing from "./pages/404.jsx";
import Records from "./pages/Records/index.jsx";
import RecordsLayout from "./pages/Records/RecordsLayout.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";
import ArchivedPage from "./pages/Records/ArchivedPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/login" element={<LoginPage />} />

          {/* <Route element={<RequireAuth />}> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="dashboard" replace />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="records" element={<RecordsLayout />}>
              <Route path="" element={<Records />} />
              <Route path="archived" element={<ArchivedPage />} />
            </Route>
          </Route>
          {/* </Route> */}
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
