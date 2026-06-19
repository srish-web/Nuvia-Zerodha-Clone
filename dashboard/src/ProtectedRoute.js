import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [verified, setVerified] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = `${process.env.REACT_APP_FURL}/login`;
    } else {
      setVerified(true);
    }
  }, []);

  if (verified === null) {
    return <div className="text-center mt-5">Verifying authentication...</div>;
  }

  return verified ? children : null;
};

export default ProtectedRoute;