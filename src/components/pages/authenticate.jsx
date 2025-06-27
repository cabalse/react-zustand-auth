import { useEffect } from "react";
import { useLocation } from "react-router";
import { useRefreshToken, useToken } from "../../store/useApplicationStore";

const Authenticate = () => {
  const location = useLocation();
  const token = useToken();

  useEffect(() => {
    if (!token) {
      const url = new URL(import.meta.env.VITE_SSO_URL);

      url.searchParams.append(
        "returnBase64",
        btoa(
          import.meta.env.VITE_APP_BASE_URL + import.meta.env.VITE_LANDING_PAGE
        )
      );
      window.location.href = url.href;
    }
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Authenticate</h1>
    </div>
  );
};

export default Authenticate;
