import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <a className={css.logo}>
        Travel<span>Tracks</span>
      </a>
      {/* <a>
        <svg width="136" height="16">
          <use href="../../assets/logo.svg"></use>
        </svg>
      </a> */}

      <nav className={css.list}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </nav>
      {/* <ul className={css.list}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Catalog</a>
        </li>
      </ul> */}
    </header>
  );
};

export default Header;
