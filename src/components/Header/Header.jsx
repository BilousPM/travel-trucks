import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
// import clsx from 'clsx';

const Header = () => {
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        <img src="/src/assets/Logo.svg" alt="logo" />
      </NavLink>
      <nav className={css.nav}>
        <NavLink to="/" className={css.nav_link}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.nav_link}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
