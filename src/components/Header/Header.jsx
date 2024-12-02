import clsx from 'clsx';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <a className={css.logo}>
        Travel<span>Tracks</span>
      </a>
      <ul className={css.list}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Catalog</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
