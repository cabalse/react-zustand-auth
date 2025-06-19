import { useSearchParams } from "react-router";
import {
  useRefreshToken,
  useSetRefreshToken,
} from "../../store/useApplicationStore";
import { useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const [searchParams] = useSearchParams();
  const tokenBase64 = searchParams.get("tokenBase64");
  const incomingRefreshToken = tokenBase64 ? atob(tokenBase64) : null;

  const refreshToken = useRefreshToken();
  const setRefreshToken = useSetRefreshToken();

  useEffect(() => {
    setRefreshToken(incomingRefreshToken);
    axios.post("https://test.guardtools.se/develop/account/api/Auth/Refresh", {
      refreshToken: incomingRefreshToken,
    });
  }, [tokenBase64, incomingRefreshToken, setRefreshToken]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Landing Page</h1>
      <div className="text-xs text-center">
        <p>TokenBase64: {tokenBase64}</p>
        <p>Incoming Refresh Token: {incomingRefreshToken}</p>
        <p>RefreshToken: {refreshToken}</p>
      </div>
    </div>
  );
};

export default LandingPage;
