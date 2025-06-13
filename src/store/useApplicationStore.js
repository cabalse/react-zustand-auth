import { create } from "zustand";
import { combine } from "zustand/middleware";

const useApplicationStore = create(
  combine({ token: "", refreshToken: "" }, (set, get) => {
    return {
      setToken: (token) => {
        set({ token });
      },
      getToken: () => {
        return get().token;
      },
      setRefreshToken: (refreshToken) => {
        set({ refreshToken });
      },
      getRefreshToken: () => {
        return get().refreshToken;
      },
      clearTokens: () => {
        set({ token: "", refreshToken: "" });
      },
    };
  })
);

export default useApplicationStore;
