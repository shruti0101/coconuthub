import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useCartStore = create(
  persist(
    (set, get) => ({

      cart: [],
      cartOpen: false,

      openCart: () => set({ cartOpen: true }),
      closeCart: () => set({ cartOpen: false }),

   addToCart: (product, quantity = 1, image) => {

  const cart = get().cart
  const existing = cart.find((item) => item.name === product.name)

  if (existing) {

    const updated = cart.map((item) =>
      item.name === product.name
        ? { 
            ...item, 
            quantity: item.quantity + quantity,
            image: image || item.image // ✅ keep/update image
          }
        : item
    )

    set({ cart: updated })

  } else {

    set({
      cart: [
        ...cart,
        { 
          ...product, 
          quantity,
          image // ✅ store image here
        }
      ]
    })

  }

  set({ cartOpen: true })
},

      removeItem: (name) => {
        set({
          cart: get().cart.filter((item) => item.name !== name)
        })
      },

      updateQty: (name, qty) => {

        const updated = get().cart.map((item) =>
          item.name === name
            ? { ...item, quantity: Math.max(1, qty)  }
            : item
        )

        set({ cart: updated })
      },

      clearCart: () => set({ cart: [] }),

      totalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      }

    }),
    { name: "cart-storage" }
  )
)