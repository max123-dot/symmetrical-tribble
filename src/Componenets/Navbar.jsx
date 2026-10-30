import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="w-full min-h-[58px] bg-[#fbfefe] border-b border-slate-200 mb-6 sm:mb-8">
      <div className="relative mx-auto flex min-h-[58px] max-w-[1440px] items-center justify-between px-3 sm:px-5 md:px-8">

        {/* Left Navigation */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            to="/"
            className="text-[9px] sm:text-[10px] font-normal uppercase tracking-wide text-slate-700 transition hover:text-black"
          >
            HOME
          </Link>

          <Link
            to="/#shop"
            className="relative text-[9px] sm:text-[10px] font-normal uppercase tracking-wide text-slate-700"
          >
            SHOP
            <span className="absolute -bottom-[5px] left-0 h-[3px] w-3 rounded-full bg-[#092e2c]"></span>
          </Link>
        </div>

        {/* Center Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-light tracking-wide text-[#344747]"
        >
          <span className="text-base sm:text-lg md:text-[20px]">
            thetotebagshop
          </span>
          <sup className="ml-0.5 text-[8px] sm:text-[10px]">®</sup>
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-3 sm:gap-4 text-[#092e2c]">

          {/* Account Icon */}
          <button
            type="button"
            aria-label="My account"
            className="cursor-pointer transition hover:opacity-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
            </svg>
          </button>

          {/* Shopping Cart Icon */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative text-[#092e2c] transition hover:opacity-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6" />
              <circle cx="10" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#092e2c] px-1 text-[9px] text-white">
                {cartCount}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
}