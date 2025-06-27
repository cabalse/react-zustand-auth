import { useNavigate, useSearchParams } from "react-router";
import {
  useRefreshToken,
  useSetRefreshToken,
  useSetToken,
  useSetUser,
} from "../../store/useApplicationStore";
import { useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setRefreshToken = useSetRefreshToken();
  const refreshToken = useRefreshToken();
  const setToken = useSetToken();
  const setUser = useSetUser();

  useEffect(() => {
    const tokenBase64 = decodeURIComponent(
      searchParams.get("tokenBase64") || ""
    );

    if (!tokenBase64) {
      console.error("No token found in URL");
      return;
    }

    const decodedToken = atob(tokenBase64);

    axios
      .post(
        import.meta.env.VITE_API_BASE_URL +
          import.meta.env.VITE_ACCOUNT_API +
          "/Auth/Refresh",
        {
          refreshToken: decodedToken,
        }
      )
      .then((response) => {
        if (response.data && response.data.refreshToken) {
          setRefreshToken(
            response.data.refreshToken,
            response.data.refreshTokenExpiryTime
          );
          setToken(response.data.token);
          setUser(response.data.user);
          navigate("/"); 
        } else {
          console.error("No refresh token received in response");
        }
      })
      .catch((error) => {
        console.error("Error refreshing token:", error);
      });
  }, [searchParams]);

  useEffect(() => {}, [refreshToken]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Landing Page</h1>
    </div>
  );
};

export default LandingPage;
