import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        <img src="/src/assets/Logo.svg" alt="SVG image" />
      </NavLink>
      <nav className={css.list}>
        <NavLink to="/" className={css.listItem}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.listItem}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
