import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../../layouts/dashboard";

const Home = lazy(() => import("./views/home"));

function Modules() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default Modules;
