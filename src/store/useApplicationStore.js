import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";

const initialState = {
  token: "",
  refreshToken: { token: "", expTime: "" },
  user: null,
};

const stateActions = (set) => {
  return {
    setToken: (token) => {
      set({ token });
    },
    setRefreshToken: (token, expTime) => {
      set(() => ({ refreshToken: { token: token, expTime: expTime } }));
    },
    setUser: (user) => {
      set(() => ({ user: user }));
    },
  };
};

const useApplicationStore = create(
  persist(combine(initialState, stateActions), {
    name: "auth-storage",
    storage: {
      getItem: (name) => {
        const value = sessionStorage.getItem(name);
        return value ? JSON.parse(value) : null;
      },
      setItem: (name, value) => {
        sessionStorage.setItem(name, JSON.stringify(value));
      },
      removeItem: (name) => {
        sessionStorage.removeItem(name);
      },
    },
  })
);

export const useSetRefreshToken = () =>
  useApplicationStore((state) => state.setRefreshToken);

export const useRefreshToken = () =>
  useApplicationStore((state) => state.refreshToken, shallow);

export const useSetToken = () => useApplicationStore((state) => state.setToken);

export const useToken = () => useApplicationStore((state) => state.token);

export const useSetUser = () => useApplicationStore((state) => state.setUser);

export const useUser = () => useApplicationStore((state) => state.user);
