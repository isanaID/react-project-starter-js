import create, { SetState, GetState } from "zustand";

const stateDefault = {
  result: 10,
};

const actions = (set, get) => ({
  setResult: (payload) => {
    set((state) => ({
      ...state,
      result: payload,
    }));
  },
});

export const useExample = create((set, get) => ({
  ...stateDefault,
  ...actions(set, get),
}));
