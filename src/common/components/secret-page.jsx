import { useAuth } from "../../lib/auth-provider/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shallow from "zustand/shallow";

function SecretPage({ children }) {
  const navigate = useNavigate();
  const [isAuth] = useAuth((state) => [state.isAuth], shallow);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return children;
}

export default SecretPage;
