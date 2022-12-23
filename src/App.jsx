import { Suspense, lazy, useEffect } from "react";
import shallow from "zustand/shallow";
import {
  useLocation,
  useNavigate,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import { useAuth } from "./lib/auth-provider/context";
import { useProfile } from "./lib/auth-provider/context/hooks";

import { FullPageSpinner } from "./common/components";

const FullPageError = lazy(() => import("./common/components/full-page-error"));
const Home = lazy(() => import("./modules/home"));
const LoginModules = lazy(() => import("./modules/login"));
const ExampleModules = lazy(() => import("./modules/example"));

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [getAuth] = useAuth((state) => [state.getAuth], shallow);

  const { refetch: getProfile } = useProfile();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location, navigate]);

  useEffect(() => {
    const currentUser = getAuth();
    if (currentUser.token) {
      getProfile();
    }
  }, [getAuth, getProfile]);

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <Routes>
        <Route path="/home/*" element={<Home />} />
        <Route path="/login/*" element={<LoginModules />} />
        <Route path="/example/*" element={<ExampleModules />} />
      </Routes>
    </Suspense>
  );
}

export default App;
