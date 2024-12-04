import { NavLink } from 'react-router-dom';
import css from './PrimaryButton.module.css';

const PrimaryButton = ({ label, style = {} }) => {
  return (
    <NavLink to="/catalog" className={css.button} style={style}>
      {label}
    </NavLink>
  );
};

export default PrimaryButton;
