import { Link } from "react-router-dom";

const heroCards = [
   {
      id: 1,
      title: "Explore the totebag fashion",
      text: "Totes are reliable carriage that adds to the details of your dress fashion with contradicting your fashion sense.",
      image: "/explore.jpg",
      button: "Shop now",
      large: true,
   },
   {
      id: 2,
      title: "Branded Collections",
      text: "Customize your style and brands here on thetotebagshop.",
      image: "/branded.jpg",
   },
   {
      id: 3,
      title: "Totes as Office wears.",
      text: "Totes can be worn to workspaces and to the office likewise.",
      image: "/branded.jpg",
   },
];

const products = [
   { id: 1, name: "Chinos", price: "N5,000", image: "/jeans.jpeg", alt: "Bag" },
   { id: 2, name: "Chinos", price: "N5,000", image: "/monoclebag.jpg", alt: "Bag" },
   { id: 3, name: "Chinos", price: "N5,000", image: "/peachbasket.jpeg", alt: "Bag" },
   { id: 4, name: "Chinos", price: "N5,000", image: "/happybag.jpg", alt: "Bag" },
   { id: 5, name: "Chinos", price: "N5,000", image: "/minimalist.jpeg", alt: "Bag" },
   { id: 6, name: "Chinos", price: "N5,000", image: "/zero-waste.png", alt: "Bag" },
   { id: 7, name: "Chinos", price: "N5,000", image: "/angel.jpeg", alt: "Bag" },
   { id: 8, name: "Chinos", price: "N5,000", image: "/office-totes.png", alt: "Bag" },
];

function HeroCard({ card }) {
   return (
      <li
         className={`relative overflow-hidden rounded-2xl min-h-[260px] sm:min-h-[300px] md:min-h-[320px] bg-slate-300 bg-cover bg-center flex items-end ${
            card.large ? "col-span-2 sm:col-span-2 md:col-span-2" : "col-span-2 sm:col-span-1"
         }`}
         style={{ backgroundImage: `url(${card.image})` }}
      >
         {/* dark overlay so the white text is readable */}
         <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
         <div className="relative p-4 md:p-6 text-white">
            <h2
               className={`font-medium leading-tight ${
                  card.large ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
               }`}
            >
               {card.title}
            </h2>
            <p
               className={`mt-2 text-slate-100 ${
                  card.large ? "text-sm max-w-md" : "text-xs"
               }`}
            >
               {card.text}
            </p>
            {card.button && (
               <button
                  type="button"
                  className="mt-4 cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
               >
                  {card.button}
               </button>
            )}
         </div>
      </li>
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

export default function TotebagHome() {
   return (
      <div className="px-4 md:px-8 py-4 md:py-6">
         <div className="mx-auto max-w-4xl lg:max-w-7xl">
            {/* Hero: 3 cards with background images */}
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 md:mb-8">
               {heroCards.map((card) => (
                  <HeroCard key={card.id} card={card} />
               ))}
            </ul>

            {/* Products: every card has its image, name and price (2 full rows) */}
            <ul className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 sm:grid-cols-3 lg:grid-cols-4">
               {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </ul>
         </div>
      </div>
   );
}
