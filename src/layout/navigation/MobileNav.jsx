import { NavLink } from "react-router";
import NavLinks from "./Links";

export default function MobileNavigation({ isOpen }) {
  const links = NavLinks();

  return (
    <section
      id="mobile-menu"
      className={`${isOpen ? "animate-open-menu" : "hidden"
        } fixed top-0 right-4 mt-16 w-48 flex-col bg-magBlue text-lg text-white md:hidden`}
    >
      <nav className="flex flex-col px-4 py-6" aria-label="mobile-menu">
        {links.map((link) => (
          <NavLink
            id={link.id}
            key={link.id}
            to={link.link}
            target={link.internal ? "_self" : "_blank"}
            rel="noreferrer"
            className="block rounded p-0 py-2 hover:underline hover:decoration-2 hover:decoration-magGreen"
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </section>
  );
}
