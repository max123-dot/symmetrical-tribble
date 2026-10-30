import { Link } from "react-router-dom";

const availableStock = [
   { id: 1, name: "Chinos", price: "N5,000", image: "/jeans.jpeg",  },
   { id: 2, name: "Chinos", price: "N5,000", image: "/images (1).jpeg",  },
   { id: 3, name: "Chinos", price: "N5,000", image: "/images (1).jpeg",  },
   { id: 4, name: "Chinos", price: "N5,000", image: "/happybag.jpg", },
   { id: 5, name: "Chinos", price: "N5,000", image: "/peachbasket.jpeg",},
   { id: 6, name: "Chinos", price: "N5,000", image: "/minimalist.jpeg",  },
   { id: 7, name: "Chinos", price: "N5,000", image: "/zero-waste.png", },
   { id: 8, name: "Chinos", price: "N5,000", image: "/angel.jpeg",},
   { id: 9, name: "Chinos", price: "N5,000", image: "/monoclebag.jpg", },
   { id: 10, name: "Chinos", price: "N5,000", image: "/colorful.jpeg", },
   { id: 11, name: "Chinos", price: "N5,000", image: "/angel.jpeg", },
   { id: 12, name: "Chinos", price: "N5,000", image: "/jeans.jpeg", },
];

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

function StockSection({ id, title, products }) {
   return (
      <section className="mt-6 md:mt-8 px-4 md:px-8" aria-labelledby={id}>
         <div className="mx-auto max-w-4xl lg:max-w-7xl">
            <h2 id={id} className="text-2xl font-bold text-slate-900">
               {title}
            </h2>
            <p className="text-sm text-slate-700 mt-1 mb-6">
               These totebags are currently available for sales
            </p>
            {/* 4 columns x 3 rows = 12 items */}
            <ul className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3 lg:grid-cols-4">
               {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </ul>
         </div>
      </section>
   );
}

// Component 1
export function AvailableStock() {
   return (
      <StockSection
         id="available-stock-heading"
         title="Available Stock"
         products={availableStock}
      />
   );
}
