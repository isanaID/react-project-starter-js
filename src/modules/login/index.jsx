import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import shallow from "zustand/shallow";

import { useAuth } from "../../lib/auth-provider/context";

import Layout from "../../layouts/general";

import Login from "./views/login";

function Modules() {
  const navigate = useNavigate();
  const [getAuth] = useAuth((state) => [state.getAuth], shallow);

  useEffect(() => {
    const currentUser = getAuth();
    if (currentUser.token) {
      navigate("/");
    }
  }, [getAuth, navigate]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default Modules;
