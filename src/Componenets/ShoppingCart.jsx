import { useState } from "react";

const initialCartItems = [
   {
      id: 1,
      name: "Sunscreen",
      image: "/happybag.jpg",
      alt: "sunscreen",
      price: 18.5,
      quantity: 1,
   },
   {
      id: 2,
      name: "Aloederm Cream",
      image: "/monoclebag.jpg",
      alt: "aloederm cream",
      price: 18.0,
      quantity: 1,
   },
   {
      id: 3,
      name: "Face Body Cream",
      image: "/jeans.jpeg",
      alt: "face body cream",
      price: 15.5,
      quantity: 1,
   },
   {
      id: 4,
      name: "Faceclin Facewash",
      image: "/peachbasket.jpeg",
      alt: "faceclin facewash",
      price: 18.0,
      quantity: 1,
   },
   {
      id: 5,
      name: "Gentle Facewash",
      image: "/zero-waste.png",
      alt: "gentle facewash",
      price: 18.0,
      quantity: 1,
   },
];

const SHIPPING = 2.0;
const TAX = 4.0;

const TrashIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 fill-current inline"
      viewBox="0 0 24 24"
      aria-hidden="true"
   >
      <path
         d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
         data-original="#000000"
      />
      <path
         d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
         data-original="#000000"
      />
   </svg>
);

const MinusIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-2.5 fill-current"
      viewBox="0 0 124 124"
   >
      <path
         d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
         data-original="#000000"
      />
   </svg>
);

const PlusIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-2.5 fill-current"
      viewBox="0 0 42 42"
   >
      <path
         d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
         data-original="#000000"
      />
   </svg>
);

function CartRow({ item, onRemove, onQuantityChange }) {
   return (
      <tr>
         <td className="p-4">
            <div className="flex items-center gap-4 w-max">
               <div className="w-24 h-24 shrink-0">
                  <img
                     src={item.image}
                     className="w-full h-full object-contain"
                     alt={item.alt}
                  />
               </div>
               <div>
                  <h3 className="text-base font-semibold text-zinc-900">
                     {item.name}
                  </h3>
                  {/* Remove button */}
                  <button
                     type="button"
                     aria-label={`Remove ${item.name} from cart`}
                     onClick={() => onRemove(item.id)}
                     className="mt-4 font-semibold text-red-600 text-xs w-max flex items-center gap-2 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 rounded"
                  >
                     <TrashIcon />
                     REMOVE
                  </button>
               </div>
            </div>
         </td>

         <td className="p-4">
            {/* Quantity Selector */}
            <div className="flex items-center w-max mt-auto px-2.5 py-1.5 border border-zinc-300 text-zinc-900 font-medium text-xs rounded-md">
               <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                  className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 rounded"
               >
                  <MinusIcon />
               </button>
               <span className="mx-3">{item.quantity}</span>
               <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                  className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 rounded"
               >
                  <PlusIcon />
               </button>
            </div>
         </td>

         <td className="p-4">
            <p className="text-base font-semibold text-zinc-900">
               ${(item.price * item.quantity).toFixed(2)}
            </p>
         </td>
      </tr>
   );
}

export default function ShoppingCart() {
   const [cartItems, setCartItems] = useState(initialCartItems);
   const [promoCode, setPromoCode] = useState("");
   const [discount] = useState(0.0);

   const handleRemove = (id) => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
   };

   const handleQuantityChange = (id, newQty) => {
      if (newQty < 1) return;
      setCartItems((prev) =>
         prev.map((item) =>
            item.id === id ? { ...item, quantity: newQty } : item
         )
      );
   };

   const handlePromoSubmit = (e) => {
      e.preventDefault();
      // Promo code logic placeholder
   };

   const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
   );
   const total = subtotal - discount + SHIPPING + TAX;

   return (
      <main>
         <div className="grid gap-y-6 lg:grid-cols-3">
            {/* Left: Cart Table */}
            <div className="lg:col-span-2 p-6 overflow-x-auto">
               <div className="flex gap-2 border-b border-zinc-300 pb-4">
                  <h1 className="text-2xl font-medium text-zinc-900 flex-1 tracking-tighter">
                     Shopping Cart
                  </h1>
                  <p className="text-base text-zinc-900 font-medium">
                     {cartItems.length} Items
                  </p>
               </div>

               <table className="mt-6 w-full border-collapse divide-y divide-zinc-300">
                  <thead className="whitespace-nowrap text-left">
                     <tr>
                        <th className="text-base text-zinc-600 p-4 font-medium">
                           Description
                        </th>
                        <th className="text-base text-zinc-600 p-4 font-medium">
                           Quantity
                        </th>
                        <th className="text-base text-zinc-600 p-4 font-medium">
                           Price
                        </th>
                     </tr>
                  </thead>

                  <tbody className="whitespace-nowrap divide-y divide-zinc-300">
                     {cartItems.map((item) => (
                        <CartRow
                           key={item.id}
                           item={item}
                           onRemove={handleRemove}
                           onQuantityChange={handleQuantityChange}
                        />
                     ))}
                  </tbody>
               </table>
            </div>

            {/* Right: Order Summary */}
            <div className="bg-zinc-50 p-6 lg:sticky lg:top-0 lg:h-screen">
               <h2 className="text-lg font-medium text-zinc-900 mb-8 border-b border-zinc-300 pb-4 tracking-tighter">
                  Order Summary
               </h2>
               <ul className="text-zinc-600 font-medium space-y-4 divide-y divide-zinc-300">
                  <li className="flex flex-wrap gap-4 text-sm py-2.5 pt-0">
                     Discount{" "}
                     <span className="ml-auto text-zinc-900 font-semibold">
                        ${discount.toFixed(2)}
                     </span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm py-2.5">
                     Shipping{" "}
                     <span className="ml-auto text-zinc-900 font-semibold">
                        ${SHIPPING.toFixed(2)}
                     </span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm py-2.5">
                     Tax{" "}
                     <span className="ml-auto text-zinc-900 font-semibold">
                        ${TAX.toFixed(2)}
                     </span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm py-2.5 text-zinc-900">
                     Total{" "}
                     <span className="ml-auto font-semibold">
                        ${total.toFixed(2)}
                     </span>
                  </li>
               </ul>

               {/* Action buttons */}
               <div className="mt-6 space-y-3 text-center">
                  <button
                     type="button"
                     className="w-full px-4 py-2.5 text-white text-sm font-semibold rounded-md cursor-pointer bg-zinc-800 hover:bg-zinc-900 border border-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700"
                  >
                     Proceed to Checkout
                  </button>
                  <a
                     href="#"
                     className="inline-block text-zinc-900 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700"
                  >
                     Continue Shopping
                  </a>
               </div>

               <hr className="my-6 border-zinc-300" />
               
            </div>
         </div>
      </main>
   );
}