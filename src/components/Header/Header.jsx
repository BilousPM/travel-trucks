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
