import { useNavigate } from "react-router-dom";

// import styles from "../../assets/style/scss/Button.module.scss";

const ButtonReturn = () => {
  const Navigate = useNavigate();

  return (
    <button
      type="button"
      className="py-2 px-6 bg-(--light-color) text-(--secondary-text-color) border-none rounded-md shadow-(--button-shadow) cursor-pointer transition-colors duration-300 focus:outline-none active:outline-none focus:bg-(--light-color) focus:text-(--secondary-text-color) active:bg-(--light-color) active:text-(--secondary-text-color) hover:bg-(--button-hover-bg) hover:text-(--active-menu-text)"
      onClick={() => Navigate(-1)}
      aria-label="Retour à la page précédente"
    >
      Retour
    </button>
  );
};

export { ButtonReturn };
