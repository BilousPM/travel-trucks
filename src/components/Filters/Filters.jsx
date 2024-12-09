import css from './Filters.module.css';

const Filters = ({ children }) => {
  return (
    <div>
      <p className={css.filter}>Filters</p>
      {children}
    </div>
  );
};

export default Filters;
