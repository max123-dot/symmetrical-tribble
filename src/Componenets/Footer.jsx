const footerData = [
   {
      title: "Quick links",
      links: [
         { name: "Terms & Conditions", href: "#" },
         { name: "Privacy Policy", href: "#" },
         { name: "Contact Us", href: "#" },
         { name: "Terms of Service", href: "#" },
         { name: "Refund policy", href: "#" },
      ],
   },
];

const socialLinks = [
   {
      name: "TikTok",
      href: "#",
      icon: (
         <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
            <path d="M19.6 6.7a5.4 5.4 0 0 1-3.3-1.1 5.4 5.4 0 0 1-2.1-3.6h-3.4v13.1a2.9 2.9 0 1 1-2-2.8V8.8a6.3 6.3 0 1 0 5.4 6.2V9.2a8.8 8.8 0 0 0 5.4 1.8V7.6a5.5 5.5 0 0 1 0-.9z" />
         </svg>
      ),
   },
   {
      name: "Instagram",
      href: "#",
      icon: (
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
         </svg>
      ),
   },
];

export default function Footer() {
   return (
      <footer className="bg-neutral-950 pt-10 sm:pt-12 mt-8 sm:mt-10 md:mt-12 pb-8 px-3 sm:px-4 md:px-8 text-white">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr] gap-y-10 sm:gap-y-12 gap-x-6 sm:gap-x-8">
               {/* Brand block */}
               <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                  <p className="text-neutral-200 text-sm max-w-xs">
                     We provide comfy tote bags that won't mess up your style and
                     have plenty of space for all your stuff.
                  </p>
                  <p className="mt-6 sm:mt-10 text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-neutral-100">
                     thetotebagshop<sup className="text-xl sm:text-2xl align-top">®</sup>
                  </p>
                  <ul className="mt-6 sm:mt-8 flex items-center gap-5 text-neutral-100">
                     {socialLinks.map((social) => (
                        <li key={social.name}>
                           <a
                              href={social.href}
                              aria-label={social.name}
                              className="block hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                           >
                              {social.icon}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Quick links */}
               {footerData.map((section) => (
                  <div key={section.title}>
                     <h3 className="text-neutral-100 font-semibold text-xl mb-6">
                        {section.title}
                     </h3>
                     <ul className="space-y-4 text-neutral-300 text-sm font-normal">
                        {section.links.map((link) => (
                           <li key={link.name}>
                              <a
                                 href={link.href}
                                 className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                              >
                                 {link.name}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}

               {/* Connect with Us */}
               <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                  <h3 className="text-neutral-100 font-semibold text-lg sm:text-xl mb-4 sm:mb-6">
                     Connect with Us
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-sm">
                     Subscribe to our Newsletter to be the first to be aware of
                     recent production and other production offers.
                  </p>
                  <form
                     onSubmit={(e) => e.preventDefault()}
                     className="mt-6 sm:mt-10 flex items-center gap-2 sm:gap-3 rounded-lg bg-white/10 p-2.5 sm:p-3 max-w-sm lg:max-w-none"
                  >
                     <input
                        type="email"
                        placeholder="Enter email address"
                        aria-label="Email address"
                        className="flex-1 min-w-0 bg-transparent px-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none"
                     />
                     <button
                        type="submit"
                        aria-label="Subscribe"
                        className="cursor-pointer rounded-md bg-neutral-800 p-2.5 text-white hover:bg-neutral-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                     >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                           <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                     </button>
                  </form>
               </div>
            </div>

            <hr className="border-white/10 my-8 mt-24" />

            <div className="text-right">
               <p className="text-neutral-300 text-xs">
                  © thetotebagshop <span className="font-semibold text-white">2024.</span>
               </p>
            </div>
         </div>
      </footer>
   );
}