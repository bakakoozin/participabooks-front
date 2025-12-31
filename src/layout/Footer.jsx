import { NavLink, useLocation } from "react-router-dom";

import { ButtonReturn } from "../components/UI/ButtonReturn";

// import styles from "../assets/style/scss/Layout.module.scss";

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer
      className="fixed bottom-0 left-0 w-full h-10 p-2.5 text-center bg-(--green-color) border-t border-(--layout-border-color) shadow-[0_-4px_4px_var(--layout-border-color)]
      md:static md:flex md:justify-between md:items-center md:h-12.5"
    >
      {!isHome && (
        <div className="hidden md:flex">
          <ButtonReturn />
        </div>
      )}
      <p className="text-(--secondary-text-color)">&copy; 2025 - Baka Dev - Participabooks</p>
      <nav
        aria-label="Liens légaux"
        className="hidden text-(--admin-text-color) md:flex md:mr-4 gap-4"
      >
        <NavLink
          to="cgu"
          end
          className={({ isActive }) => `transition-colors duration-300
       ${
         isActive
           ? "text-(--dark-text-color)"
           : "text-(--admin-text-color) hover:text-(--dark-text-color)"
       }`}
        >
          CGU
        </NavLink>
        <NavLink
          to="legal"
          end
          className={({ isActive }) => `transition-colors duration-300
       ${
         isActive
           ? "text-(--dark-text-color)"
           : "text-(--admin-text-color) hover:text-(--dark-text-color)"
       }`}
        >
          Mentions Légales
        </NavLink>
      </nav>
    </footer>
  );
}
