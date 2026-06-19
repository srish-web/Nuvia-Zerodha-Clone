import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [verified, setVerified] = useState(null);

  useEffect(() => {
    // Check if token is passed in URL (coming from login)
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");

    if (urlToken) {
      localStorage.setItem("token", urlToken);
      // Clean the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

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