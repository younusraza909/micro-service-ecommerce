import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartStoreType, CartStoreActionsType } from "@/types";

const useCartStore = create<CartStoreType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cartItems: [],
      hasHydrated: false,
      addToCart: (product) =>
        set((state) => {
          const isProductExists = state.cartItems.find(
            (item) =>
              item.id === product.id &&
              item.selectedColor === product.selectedColor &&
              item.selectedSize === product.selectedSize
          );
          if (!isProductExists) {
            return { ...state, cartItems: [...state.cartItems, product] };
          }
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          };
        }),
      removeFromCart: (product) =>
        set((state) => {
          const isProductExists = state.cartItems.find(
            (item) =>
              item.id === product.id &&
              item.selectedColor === product.selectedColor &&
              item.selectedSize === product.selectedSize
          );
          if (isProductExists && isProductExists.quantity === 1) {
            return {
              ...state,
              cartItems: state.cartItems.filter(
                (item) =>
                  item.id !== product.id &&
                  item.selectedColor !== product.selectedColor &&
                  item.selectedSize !== product.selectedSize
              ),
            };
          }
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        }),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore;
