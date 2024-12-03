import { NavLink } from 'react-router-dom';
import css from './PrimaryButton.module.css';

const PrimaryButton = () => {
  return (
    <NavLink to="/catalog" className={css.button}>
      View Now
    </NavLink>
  );
};

export default PrimaryButton;
