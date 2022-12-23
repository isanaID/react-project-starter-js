import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../../layouts/dashboard";

const RandomPage = lazy(() => import("./views/random.jsx"));

function Modules() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RandomPage />} />
      </Routes>
    </Layout>
  );
}

export default Modules;
