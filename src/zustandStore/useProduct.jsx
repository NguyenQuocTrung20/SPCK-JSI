import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useProduct = create(
  persist(
    (set) => ({
      products: [],
      loading: false,
      offset : 10,

      setProducts: (data) => set({ products : data }),
      setLoading: (value) => set({ loading : value }),
      setOffset: (value) => set({ offset : value }),
    }),
    {
      name: "useProduct", // unique name
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
