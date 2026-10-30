import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
   const [cartItems, setCartItems] = useState([]);

   // If the same bag (same color + fastening) is added again, just increase quantity
   const addToCart = (item) => {
      setCartItems((prev) => {
         const existing = prev.find((i) => i.id === item.id);
         if (existing) {
            return prev.map((i) =>
               i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
            );
         }
         return [...prev, item];
      });
   };

   const removeFromCart = (id) => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
   };

   const updateQuantity = (id, newQty) => {
      if (newQty < 1) return;
      setCartItems((prev) =>
         prev.map((item) =>
            item.id === id ? { ...item, quantity: newQty } : item
         )
      );
   };

   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

   return (
      <CartContext.Provider
         value={{
            cartItems,
            cartCount,
            addToCart,
            removeFromCart,
            updateQuantity,
         }}
      >
         {children}
      </CartContext.Provider>
   );
}

// The hook is intentionally exported alongside its provider for shared cart access.
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
   const ctx = useContext(CartContext);
   if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
   return ctx;
}