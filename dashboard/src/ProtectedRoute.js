import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [cookies, removeCookie] = useCookies([]);
  const [verified, setVerified] = useState(null); // null = loading

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        // No token — send back to frontend login
        window.location.href = "http://localhost:3000/login";
        return;
      }
      try {
        const { data } = await axios.post(
          "http://localhost:3002/",   // backend token verify endpoint
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setVerified(true);
        } else {
          removeCookie("token");
          window.location.href = "http://localhost:3000/login";
        }
      } catch (err) {
        removeCookie("token");
        window.location.href = "http://localhost:3000/login";
      }
    };
    verifyCookie();
  }, []);

  if (verified === null) return <div>Loading...</div>;
  return verified ? children : null;
};

export default ProtectedRoute;