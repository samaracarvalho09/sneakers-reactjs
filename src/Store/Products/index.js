import { create } from "zustand";

export const productsStore = create((set) => ({
  productCount: {},
  inc: (id) =>
    set((state) => ({
      productCount: {
        ...state.productCount,
        [id.toString()]: state.productCount[id.toString()]
          ? state.productCount[id.toString()] + 1
          : 1,
      },
    })),
  dec: (id) =>
    set((state) => ({
      productCount: {
        ...state.productCount,
        [id.toString()]:
          state.productCount[id.toString()] && state.productCount[id.toString()] > 0
            ? state.productCount[id.toString()] - 1
            : 0,
      },
    })),
}));
