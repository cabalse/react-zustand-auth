import { create } from "zustand";
import { combine } from "zustand/middleware";

const useApplicationStore = create(
  combine({ token: "", refreshToken: "" }, (set) => {
    return {
      setToken: (token) => {
        set({ token });
      },
      setRefreshToken: (refreshToken) => {
        set(() => ({ refreshToken: refreshToken }));
      },
    };
  })
);

export const useSetRefreshToken = () =>
  useApplicationStore((state) => state.setRefreshToken);

export const useRefreshToken = () =>
  useApplicationStore((state) => state.refreshToken);

export const useSetToken = () => useApplicationStore((state) => state.setToken);

export const useToken = () => useApplicationStore((state) => state.token);
