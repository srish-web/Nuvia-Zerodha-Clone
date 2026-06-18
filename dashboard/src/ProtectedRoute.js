import { useEffect, useState, useCallback } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [verified, setVerified] = useState(null); // null = loading, true = ok, false = redirect

  // Memoize the verification function to avoid recreating it on every render
  const verifyCookie = useCallback(async () => {
    if (!cookies.token) {
      window.location.href = `${process.env.REACT_APP_FURL}/login`;
      return;
    }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BURL}/`,           // ← Backend port (correct)
        {},
        { withCredentials: true }
      );

      if (data.status === true) {
        setVerified(true);
      } else {
        removeCookie("token", { path: "/" });
        window.location.href = `${process.env.REACT_APP_FURL}/login`;
      }
    } catch (err) {
      console.error("Auth verification failed:", err);
      removeCookie("token", { path: "/" });
      window.location.href = `${process.env.REACT_APP_FURL}/login`;
    }
  }, [cookies.token, removeCookie]);

  useEffect(() => {
    verifyCookie();
  }, [verifyCookie]); // ← Now properly depends on the stable function

  if (verified === null) {
    return <div className="text-center mt-5">Verifying authentication...</div>;
  }

  return verified ? children : null;
};

export default ProtectedRoute;