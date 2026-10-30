import { useState } from "react";

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Corduroy",
    "Denim",
    "Adire",
    "Leather",
  ];

  return (
    <section
      id="shop"
      className="bg-[#fbfefe] px-5 pb-6 pt-4 md:px-8 md:pb-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Search Bar */}
        <div className="mx-auto flex h-[38px] max-w-[365px] overflow-hidden rounded-md border border-slate-100 bg-white shadow-sm">

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
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search for your favourite totebag, colour, design patterns"
            className="min-w-0 flex-1 bg-transparent px-3 text-[10px] font-light text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Category Buttons */}
        <div className="mt-[15px] flex flex-wrap items-center justify-center gap-2">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`flex h-[30px] items-center gap-1.5 rounded-full border px-3 text-[10px] transition duration-200 ${
                activeCategory === category
                  ? "border-[#052d2b] bg-[#052d2b] text-white"
                  : "border-slate-300 bg-transparent text-slate-700 hover:border-[#052d2b]"
              }`}
            >
              {category === "All" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M7 12h10M10 18h4" />
                  <circle cx="8" cy="6" r="1" />
                  <circle cx="15" cy="12" r="1" />
                </svg>
              )}

              {category}
            </button>
          ))}

        </div>

        {/* Section Heading */}
        <div className="mb-2 mt-7">
          <h1 className="text-[16px] font-medium leading-6 tracking-tight text-[#092d2c] md:text-[17px]">
            Shop your favourite totebag.
          </h1>

          <p className="mt-0.5 text-[10px] font-light text-slate-600">
            Select the totebag that matches your fashion.
          </p>
        </div>

        {/* Promotional Banner */}
        <div className="relative mt-2 min-h-[228px] overflow-hidden rounded-[20px] border border-slate-300 bg-white md:h-[229px]">

          {/* Slider Indicators */}
          <div className="absolute left-9 top-5 z-10 flex items-center gap-1">
            <span className="h-[9px] w-[14px] rounded-full bg-[#333333]"></span>
            <span className="h-[9px] w-[30px] rounded-full bg-[#d9d9d9]"></span>
            <span className="h-[9px] w-[14px] rounded-full bg-[#333333]"></span>
            <span className="h-[9px] w-[14px] rounded-full bg-[#333333]"></span>
          </div>

          {/* Banner Text */}
          <div className="absolute bottom-8 left-6 z-10 max-w-[250px] md:bottom-9 md:left-[5.5%] md:max-w-[255px]">

            <p className="mb-1 text-[10px] font-light uppercase tracking-wide text-slate-600">
              TRENDING TOTEBAGS
            </p>

            <h2 className="whitespace-nowrap text-[23px] font-medium leading-tight tracking-tight text-[#252525] md:text-[22px]">
              Leather Totebags
            </h2>

            <p className="mt-2 max-w-[235px] text-[10px] font-normal leading-[15px] text-[#444444]">
              Totebag's made with leather fabric. This
              fabric is usually stronger than the others.
            </p>

          </div>

          {/* Main Fashion Image */}
          <div className="absolute inset-y-0 right-[17%] hidden w-[48%] md:block">
            <img
              src="/images.jpeg"
              alt="Fashion bag collection"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Secondary Fashion Image */}
          <div className="absolute bottom-0 right-3 hidden h-[185px] w-[125px] md:block">
            <img
              src="/woman.png"
              alt="Leather handbag"
              className="h-full w-full object-contain object-bottom"
            />
          </div>

          {/* Mobile Banner Image */}
          <div className="absolute bottom-0 right-0 h-[130px] w-[43%] md:hidden">
            <img
              src="/woman.png"
              alt="Leather totebag"
              className="h-full w-full object-contain object-bottom"
            />
          </div>

        </div>

      </div>
    </section>
  );
}