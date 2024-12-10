import css from './Filters.module.css';

const Filters = ({ children }) => {
  return (
    <div className={css.filterWrapper}>
      <p className={css.filter}>Filters</p>
      {children}
    </div>
  );
};

export default Filters;
