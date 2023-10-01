import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from "./components/UserDashboard";
import Lounge from "./components/Lounge";
import PageNotFound from "./components/PageNotFound";

const ROLES = {
  User: 1111,
  Editor: 1111,
  Admin: 1111,
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />

        {/* private route */}
        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* default */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
