import { useState } from "react";
// import magLogo from "../../../images/mag-logo-black.png"
import magLogo from "../../assets/images/mag-logo-teal-horiz.png";
import DesktopNavigation from "../navigation/DesktopNav";
import MobileNavigation from "../navigation/MobileNav";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="text-magBlue sticky top-0 z-10 flex h-24 w-full bg-slate-50">
      <section className="container mx-auto flex items-center justify-between p-4">
        <div className="flex flex-row items-center gap-4">
          <a
            href="https://azmag.gov/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Maricopa Association of Governments home page (opens in a new tab)"
            className="flex items-center gap-x-5"
          >
            <img
              className="h-7 md:h-8 lg:h-10"
              src={magLogo}
              alt="Maricopa Association of Governments"
            />
          </a>
          <h1 className="text-sm leading-none font-bold tracking-tight md:text-lg lg:text-2xl">
            MAG Interactive Maps
          </h1>
        </div>
        <div className="flex">
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            onClick={toggleMobileMenu}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-slate-800 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-800 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-800 after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <DesktopNavigation />
        </div>
      </section>
      <MobileNavigation isOpen={mobileMenuOpen} />
    </header>
  );
}
