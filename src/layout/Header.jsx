import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { API_URL, URL_MEDIAS } from "../utils/constants";
import { toggleMenu } from "../features/menuSlice";
import { logout } from "../features/authSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "../assets/style/scss/Layout.module.scss";
import {
  faBars,
  faXmark,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { infos } = useSelector((state) => state.auth);
  const { isLogged } = useSelector((state) => state.auth);
  const { isMenuOpen } = useSelector((state) => state.menu);
  const getTheme = () =>
    document.documentElement.getAttribute("data-theme") || "clair";

  // Affichage du logo par défaut
  const getDefaultLogo = (theme) =>
    theme === "sombre" ? "/logo_pbooks_light.png" : "/logo_pbooks_dark.png";

  const getHoverLogo = (theme) =>
    theme === "sombre" ? "/logo_pbooks_dark.png" : "/logo_pbooks_light.png";

  const [theme, setTheme] = useState(getTheme());
  const [logoSrc, setLogoSrc] = useState(getDefaultLogo(theme));

  const hoverLogo = getHoverLogo(theme);
  const clickedLogo = hoverLogo;
  const defaultLogo = getDefaultLogo(theme);

  // Fonction pour gérer la déconnexion
  async function handleLogout() {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    if (response.ok) {
      dispatch(logout());
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        dispatch(toggleMenu());
      }
      navigate("/");
    }
  }

  // Fonction pour gérer l'ouverture et la fermeture du menu
  function handleClick() {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      dispatch(toggleMenu());
    }
  }

  // Fonction pour gérer le survol du logo
  function handleMouseEnter() {
    setLogoSrc(hoverLogo);
  }

  function handleMouseLeave() {
    setLogoSrc(defaultLogo);
  }

  // Fonction pour gérer le clic sur le logo
  function handleClickLogo() {
    setLogoSrc(clickedLogo);

    setTimeout(() => {
      setLogoSrc(defaultLogo);
    }, 300);
  }

  // Fonction pour surveiller le changement de thème
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme = getTheme();
      setTheme(newTheme);
      setLogoSrc(getDefaultLogo(newTheme));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
  <header
    className="fixed top-0 z-30 h-15 px-4 w-full flex justify-between items-center
               bg-(--green-color) border-b-(--layout-border-color)
               shadow-[0_4px_5px_var(--layout-border-color)]
               text-(--secondary-text-color) font-(--font-alt) md:h-24"
  >
    {/* Overlay flou pour mobile */}
    {isMenuOpen && (
      <div className="fixed inset-0 bg-black/20 backdrop-blur-md z-30 md:hidden"></div>
    )}

    {/* Menu mobile / nav */}
    <nav
      className={`${
        isMenuOpen
          ? "fixed top-0 left-0 w-[70vw] h-full grid grid-cols-1 auto-rows-min justify-items-center items-start gap-y-8 pt-24 px-4 pb-8 bg-(--brown-color) rounded-br-lg shadow-(--card-shadow) z-40 md:hidden"
          : "hidden md:flex md:order-1 md:flex-row md:items-center md:static md:w-auto md:h-auto md:transform-none md:opacity-100 md:pointer-events-auto md:bg-transparent md:shadow-none md:gap-4 md:text-3xl"
      }`}
    >
      {/* Bouton fermer */}
      {isMenuOpen && (
        <button
          onClick={handleClick}
          className="fixed left-4 top-4 w-auto px-2 py-3 text-5xl cursor-pointer text-(--green-color) shadow-none z-50"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}

      {/* Liens */}
      <NavLink
        to="/"
        end
        onClick={handleClick}
        className={({ isActive }) =>
          `text-(--secondary-text-color) bg-(--green-color) shadow-(--button-shadow) rounded p-4 w-full
           hover:bg-(--button-hover-bg) hover:text-(--active-menu-text)
           ${isActive ? "bg-(--button-hover-bg) text-(--active-menu-text)" : ""}`
        }
      >
        Bibliothèque
      </NavLink>

      {!isLogged ? (
        <NavLink
          to="auth/login"
          end
          onClick={handleClick}
          className={({ isActive }) =>
            `text-(--secondary-text-color) bg-(--green-color) shadow-(--button-shadow) rounded p-4 w-full
             hover:bg-(--button-hover-bg) hover:text-(--active-menu-text)
             ${isActive ? "bg-(--button-hover-bg) text-(--active-menu-text)" : ""}`
          }
        >
          Se connecter
        </NavLink>
      ) : (
        <>
          <NavLink
            to="shelf"
            end
            onClick={handleClick}
            className={({ isActive }) =>
              `text-(--secondary-text-color) bg-(--green-color) shadow-(--button-shadow) rounded p-4 w-full
               hover:bg-(--button-hover-bg) hover:text-(--active-menu-text)
               ${isActive ? "bg-(--button-hover-bg) text-(--active-menu-text)" : ""}`
            }
          >
            Ma bibliothèque
          </NavLink>

          <NavLink
            to="creator"
            end
            onClick={handleClick}
            className={({ isActive }) =>
              `text-(--secondary-text-color) bg-(--green-color) shadow-(--button-shadow) rounded p-4 w-full
               hover:bg-(--button-hover-bg) hover:text-(--active-menu-text)
               ${isActive ? "bg-(--button-hover-bg) text-(--active-menu-text)" : ""}`
            }
          >
            Créer
          </NavLink>

          <NavLink
            to="dashboard"
            end
            onClick={handleClick}
            className={({ isActive }) =>
              `text-(--secondary-text-color) bg-(--green-color) shadow-(--button-shadow) rounded p-4 w-full
               hover:bg-(--button-hover-bg) hover:text-(--active-menu-text)
               ${isActive ? "bg-(--button-hover-bg) text-(--active-menu-text)" : ""}`
            }
          >
            Mon Profil
          </NavLink>

          {infos.role === "admin" && (
            <NavLink
              to="admin"
              end
              onClick={handleClick}
              className={({ isActive }) =>
                `text-(--secondary-text-color) bg-(--orange-color) shadow-(--button-shadow) rounded p-4 w-full
                 hover:bg-(--button-hover-bg) hover:text-(--active-menu-text)
                 ${isActive ? "bg-(--button-hover-bg) text-(--active-menu-text)" : ""}`
              }
            >
              Admin
            </NavLink>
          )}

          <button onClick={handleLogout}>Se déconnecter</button>
        </>
      )}

      {/* Liens légaux */}
      <div className="pt-6 flex flex-col items-center w-full gap-8 font-normal md:hidden">
        <NavLink
          to="CGU"
          end
          onClick={handleClick}
          className={({ isActive }) =>
            `text-(--secondary-text-color) bg-(--green-color) shadow-(--button-shadow) rounded p-4 w-full
             hover:bg-(--button-hover-bg) hover:text-(--active-menu-text)
             ${isActive ? "bg-(--button-hover-bg) text-(--active-menu-text)" : ""}`
          }
        >
          CGU
        </NavLink>

        <NavLink
          to="Legal"
          end
          onClick={handleClick}
          className={({ isActive }) =>
            `text-(--secondary-text-color) bg-(--green-color) shadow-(--button-shadow) rounded p-4 w-full
             hover:bg-(--button-hover-bg) hover:text-(--active-menu-text)
             ${isActive ? "bg-(--button-hover-bg) text-(--active-menu-text)" : ""}`
          }
        >
          Mentions Légales
        </NavLink>
      </div>
    </nav>

    {/* Burger menu */}
    <div
      className="block pl-2 text-3xl text-(--brown-color) cursor-pointer md:hidden"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faBars} />
    </div>

    {/* Logo */}
    <Link to="/">
      <img
        className="w-[20vw] m-0 p-0 flex items-center md:order-1 lg:w-[10vw]"
        src={logoSrc}
        alt="Logo de participabooks"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickLogo}
      />
    </Link>

    {/* Infos utilisateur */}
    <div className="flex items-center justify-center pr-1 text-2xl md:order-3">
      <p className="mr-4">{isLogged ? infos.pseudo : "non connecté"}</p>
      {!isLogged || infos.avatar === null ? (
        <FontAwesomeIcon className="lg:text-5xl" icon={faCircleUser} />
      ) : (
        <img
          className="w-8 h-8 rounded-full lg:w-13 lg:h-13"
          src={`${URL_MEDIAS}avatars/${infos.avatar}`}
          alt={`avatar de ${infos.pseudo}`}
        />
      )}
    </div>
  </header>
);
}
