import { NavLink } from "react-router";
import NavLinks from "./Links";

export default function DesktopNavigation() {
  const links = NavLinks();

  return (
    <nav
      id="nav-menu"
      className="hidden space-x-6 text-xl md:block"
      aria-label="nav-menu"
    >
      <ul className="mt-0 flex flex-row items-center justify-center p-2 text-sm font-semibold md:space-x-2 lg:space-x-6">
        {links.map((link) => (
          <li key={link.id} className="text-center">
            <NavLink
              id={link.id}
              to={link.link}
              target={link.internal ? "_self" : "_blank"}
              rel="noreferrer"
              className="flex rounded p-0 py-2 hover:underline hover:decoration-magGreen hover:decoration-2"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
