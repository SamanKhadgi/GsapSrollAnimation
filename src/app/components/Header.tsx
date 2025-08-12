import React from "react";
import TransitionLink from "./TransitionLink";

const Header = () => {
  return (
    <nav
      className="fixed top-10 left-0 right-0 z-50 flex justify-between items-center
     py-2 px-4 bg-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[8.4px] rounded-xl overflow-hidden max-w-screen-xl mx-auto"
    >
      <div className="flex justify-start items-center gap-8 w-full max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <TransitionLink
            href="/"
            label="CARS"
            className="text-neutral-300 hover:text-gray-500 transition-colors font-bold text-[40px] "
          />
        </div>
        <div className="flex items-center gap-10 ml-auto">
          <TransitionLink
            href="/about"
            label="About"
            className="text-neutral-300 hover:text-gray-500 transition-colors"
          />
          <TransitionLink
            href="/support"
            label="Support"
            className="text-neutral-300 hover:text-gray-500 transition-colors"
          />
          <TransitionLink
            href="/pricing"
            label="Pricing"
            className="text-neutral-300 hover:text-gray-500 transition-colors"
          />
          <TransitionLink
            href="/login"
            label="Login"
            className="text-neutral-300 hover:text-gray-500 transition-colors"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
