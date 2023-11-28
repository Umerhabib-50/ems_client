import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";

const useTokenVerification = (token, allowedRoles, expirationCallback) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      const date = Date.now() / 1000;

      if (date > decoded.exp) {
        localStorage.clear();
        if (expirationCallback) {
          expirationCallback();
        }
        navigate("/login");
      }
    }
  }, [location]);
};

export default useTokenVerification;
