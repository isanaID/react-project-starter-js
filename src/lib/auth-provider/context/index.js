import create, { SetState, GetState } from "zustand";

import { userPersistance, tokenPersistance } from "../persistance";

const [setUserPersistance, getUserPersistance, removeUserPersistance] =
  userPersistance();

const [setTokenPersistance, getTokenPersistance, removeTokenPersistance] =
  tokenPersistance();

const stateDefault = {
  user: {
    _id: "",
    email: "",
    name: "",
    role: "",
    fullname: "",
    phone: "",
    isActive: false,
    createAt: "",
    updateAt: "",
  },
  token: "",
  isAuth: false,
};

const actions = (set, get) => ({
  getAuth: () => {
    const currentState = get();
    let authState = { ...currentState };

    if (!currentState.isAuth) {
      const userProfile = getUserPersistance();
      const userToken = getTokenPersistance();

      if (userProfile?.email && userToken) {
        authState = {
          user: { ...userProfile },
          token: userToken,
          isAuth: true,
        };
      }
    }

    set((state) => ({
      ...state,
      user: { ...authState.user },
      token: authState.token,
      isAuth: authState.isAuth,
    }));

    return authState;
  },

  setAuth: (payload) => {
    const token = payload.token.replace("Bearer ", "");

    setUserPersistance(payload);
    setTokenPersistance(token);

    set((state) => ({
      ...state,
      user: { ...payload },
      token,
      isAuth: true,
    }));
  },

  setUser: (payload) => {
    setUserPersistance(payload);

    set((state) => ({
      ...state,
      user: { ...payload },
    }));
  },

  clearSession: () => {
    removeUserPersistance();
    removeTokenPersistance();

    set((state) => ({
      ...state,
      ...stateDefault,
    }));
  },
});

export const useAuth = create((set, get) => ({
  ...stateDefault,
  ...actions(set, get),
}));
