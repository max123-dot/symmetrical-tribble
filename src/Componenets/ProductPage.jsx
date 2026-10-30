import { useState } from "react";
import { useCart } from "./CartContext";
import { formatNaira } from "./cartUtils";
import { Link } from "react-router-dom";


const product = {
   id: "cream-totebag",
   name: "Cream colored totebag",
   price: 4000,
   deliveryFee: 1500,
   rating: "2.4",
   shortDescription:
      "The Cream-Colored Totebag is a blend of elegance and functionality. Crafted from luxurious fabric, its spacious interior accommodates daily essentials. Lightweight and stylish.",
   description:
      "The Cream-Colored Totebag is a blend of elegance and functionality. Crafted from luxurious fabric, its spacious interior accommodates daily essentials. Lightweight and stylish, it's perfect for any occasion, offering comfort and sophistication. The tote features sturdy, reinforced handles for added durability, ensuring it can carry heavier items without compromising on style. Inside, multiple pockets provide organized storage, making it easy to find your keys, phone, or wallet. The classic cream color pairs effortlessly with any outfit, making it a versatile accessory for both casual and formal settings. Whether you're heading to work, running errands, or enjoying a night out, this tote bag elevates your look while providing practical utility.",
};

const colors = [
   { name: "WHITE", image: "/images.jpeg" },
   { name: "BLACK", image: "/images (1).jpeg" },
   { name: "GREY", image: "/colorful.jpeg" },
];

const fastenings = [
   { name: "Zip", extra: 1000 },
   { name: "Button", extra: 500 },
   { name: "Zip or Button", extra: 1500 },
   { name: "None", extra: 0 },
];

const locations = ["Jos", "Abuja", "Lagos", "Port Harcourt", "Kano", "Ibadan"];

const similarProducts = [
   { id: 1, name: "Chinos", price: "N5,000", image: "/zero-waste.png", alt: "Zero Waste tote bag" },
   { id: 2, name: "Chinos", price: "N5,000", image: "/angel.jpeg", alt: "Angel tote bag" },
   { id: 3, name: "Chinos", price: "N5,000", image: "/happybag.jpg", alt: "Happy bag tote bag" },
   { id: 4, name: "Chinos", price: "N5,000", image: "/images (1).jpeg", alt: "Tote bag" },
   { id: 5, name: "Chinos", price: "N5,000", image: "/peachbasket.jpeg", alt: "Peachbasket tote bag" },
   { id: 6, name: "Chinos", price: "N5,000", image: "/minimalist.jpeg", alt: "Minimalist tote bag" },
   { id: 7, name: "Chinos", price: "N5,000", image: "/monoclebag.jpg", alt: "Green Monocle tote bag" },
   { id: 8, name: "Chinos", price: "N5,000", image: "/office-totes.png", alt: "Office totes" },
];

/* ---------- small pieces ---------- */

// fill: 1 = full, 0.5 = half, 0 = empty
function Star({ fill }) {
   const path =
      "M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z";
   return (
      <span className="relative inline-flex items-center justify-center rounded bg-teal-950 p-1">
         <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true">
            <path d={path} fill="none" stroke="#facc15" strokeWidth="2" strokeLinejoin="round" />
         </svg>
         {fill > 0 && (
            <span
               className="absolute left-1 top-1 overflow-hidden"
               style={{ width: fill === 1 ? "0.875rem" : "0.4375rem" }}
            >
               <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 max-w-none" aria-hidden="true">
                  <path d={path} fill="#facc15" stroke="#facc15" strokeWidth="2" strokeLinejoin="round" />
               </svg>
            </span>
         )}
      </span>
   );
}

function Stars({ value }) {
   return (
      <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
         {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} fill={value >= n ? 1 : value >= n - 0.5 ? 0.5 : 0} />
         ))}
      </div>
   );
}

function ProductCard({ product }) {
   return (
      <li className="flex flex-col">
         <Link
            to="/product"
            className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
         >
            <img
               src={product.image}
               alt={product.alt}
               className="w-full aspect-[4/3] object-cover bg-slate-100"
            />
            <div className="flex items-center justify-between pt-3 text-sm font-medium text-slate-900">
               <h3>{product.name}</h3>
               <p>{product.price}</p>
            </div>
         </Link>
      </li>
   );
}

/* ---------- the page (one component) ---------- */

export default function ProductPage() {
   const { addToCart } = useCart();
   const [color, setColor] = useState(colors[0]);
   const [fastening, setFastening] = useState(fastenings[3]);
   const [quantity, setQuantity] = useState(1);
   const [location, setLocation] = useState("");
   const [search, setSearch] = useState("");

   const unitPrice = product.price + fastening.extra;

   const handleAdd = () => {
      addToCart({
         id: `${product.id}-${color.name}-${fastening.name}`,
         name: product.name,
         image: color.image,
         alt: product.name,
         color: color.name,
         fastening: fastening.name,
         price: unitPrice,
         quantity,
      });
   };

   return (
      <main className="px-4 md:px-8 py-6">
         <div className="mx-auto max-w-4xl lg:max-w-7xl">
            <div className="mx-auto mb-6 flex h-[38px] max-w-[365px] overflow-hidden rounded-md border border-slate-100 bg-white shadow-sm">
               <button
                  type="button"
                  aria-label="Search products"
                  className="flex w-[32px] shrink-0 items-center justify-center bg-[#052d2b] text-white"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="1.8"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <circle cx="11" cy="11" r="7" />
                     <path d="m20 20-4-4" />
                  </svg>
               </button>
               <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="search for your favourite totebag, colour, design patterns"
                  aria-label="Search products"
                  className="min-w-0 flex-1 bg-transparent px-3 text-[10px] font-light text-slate-700 outline-none placeholder:text-slate-400"
               />
            </div>

            <h1 className="text-3xl font-semibold text-slate-900">Product details</h1>
            <p className="text-xs text-slate-700 mt-1 mb-6">
               Choose your tote bag options and add it to your cart.
            </p>

            {/* ===== Product details ===== */}
            <section className="grid lg:grid-cols-2 gap-8" aria-label="Product details">
               {/* Left: images */}
               <div>
                  <img
                     src={color.image}
                     alt={`${product.name} - ${color.name}`}
                     className="w-full aspect-[4/3] object-cover bg-slate-100 rounded-sm"
                  />

                  <ul className="mt-6 flex justify-center gap-4">
                     {colors.map((c) => (
                        <li key={c.name} className="text-center">
                           <button
                              type="button"
                              onClick={() => setColor(c)}
                              aria-pressed={color.name === c.name}
                              className={`block w-16 h-16 bg-slate-100 border-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                                 color.name === c.name ? "border-teal-950" : "border-transparent"
                              }`}
                           >
                              <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                           </button>
                           <p className="mt-1 text-xs text-slate-700">{c.name}</p>
                        </li>
                     ))}
                  </ul>

                  <fieldset className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 border border-slate-200 rounded px-3 py-2 w-max mx-auto">
                     <legend className="sr-only">Fastening</legend>
                     {fastenings.map((f) => (
                        <label key={f.name} className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                           <input
                              type="radio"
                              name="fastening"
                              checked={fastening.name === f.name}
                              onChange={() => setFastening(f)}
                              className="accent-teal-950"
                           />
                           {f.name}
                        </label>
                     ))}
                  </fieldset>
                  <p className="mt-2 text-center text-[11px] text-slate-500">
                     Zip cost N1,000.00 extra while button cost N500.00
                  </p>
               </div>

               {/* Right: info */}
               <div>
                  <p className="text-xs text-slate-700">Product</p>
                  <div className="mt-1 inline-flex items-center gap-3 rounded-md border border-teal-200 bg-teal-50 px-3 py-1.5 text-slate-700">
                     <svg viewBox="0 0 24 24" className="w-5 h-5 text-teal-900" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="6" cy="17" r="2" />
                        <circle cx="18" cy="17" r="2" />
                        <path d="M8 17h8M16 17l-2-8h-3M11 9H8" />
                     </svg>
                     <span className="text-base">Delivery fee</span>
                     <span className="rounded bg-teal-950 px-2 py-0.5 text-xs text-white">
                        {product.deliveryFee}
                     </span>
                  </div>

                  <h2 className="mt-4 text-2xl text-slate-900">{product.name}</h2>

                  <div className="mt-3 flex items-center gap-2">
                     <Stars value={4} />
                     <span className="rounded border border-slate-200 px-2 py-1 text-sm font-medium text-slate-900">
                        {product.rating}
                     </span>
                  </div>

                  <div className="mt-5 flex items-center gap-4 text-sm">
                     <div className="flex items-center gap-3 border-r-2 border-slate-300 pr-4">
                        <span className="text-slate-800">Price:</span>
                        <span className="rounded bg-slate-100 px-3 py-1.5 text-base font-semibold text-slate-900">
                           {formatNaira(unitPrice)}
                        </span>
                     </div>
                     <div className="flex items-center gap-2 text-slate-800">
                        Quantity:
                        <div className="flex items-center gap-1.5 border border-slate-200 rounded px-2 py-1 text-xs font-medium">
                           <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() => setQuantity((q) => q + 1)}
                              className="cursor-pointer px-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                           >
                              +
                           </button>
                           <span className="border border-slate-300 px-1.5">{quantity}</span>
                           <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                              className="cursor-pointer px-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                           >
                              −
                           </button>
                        </div>
                     </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-600 line-clamp-2">
                     {product.shortDescription}
                  </p>

                  <div className="mt-6 space-y-3">
                     <button
                        type="button"
                        onClick={handleAdd}
                        className="w-full cursor-pointer rounded-md border border-slate-400 bg-white py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                     >
                        Buy Now
                     </button>
                     <button
                        type="button"
                        onClick={handleAdd}
                        className="w-full cursor-pointer rounded-md border border-teal-950 bg-teal-950 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                     >
                        Add to cart
                     </button>
                  </div>

                  <div className="relative mt-5">
                     <label htmlFor="location" className="sr-only">Select your location</label>
                     <select
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full appearance-none rounded-md border border-teal-700/40 bg-teal-50 px-4 py-4 text-base text-teal-950 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                     >
                        <option value="">Select your location</option>
                        {locations.map((l) => (
                           <option key={l} value={l}>{l}</option>
                        ))}
                     </select>
                     <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-4 top-1/2 w-5 h-5 -translate-y-1/2 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                     </svg>
                  </div>
               </div>
            </section>

            {/* ===== Description ===== */}
            <section className="mt-10" aria-labelledby="description-heading">
               <h2 id="description-heading" className="text-base font-semibold text-slate-900">
                  Description
               </h2>
               <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  {product.description}
               </p>
            </section>

            {/* ===== Totebags you may like ===== */}
            <section className="mt-14" aria-labelledby="similar-heading">
               <h2 id="similar-heading" className="text-2xl text-slate-900">
                  Totebags you may like
               </h2>
               <p className="text-xs text-slate-700 mt-1 mb-6">
                  Similar totebags like the one selected.
               </p>
               <ul className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3 lg:grid-cols-4">
                  {similarProducts.map((p) => (
                     <ProductCard key={p.id} product={p} />
                  ))}
               </ul>
            </section>
         </div>
      </main>
   );
}