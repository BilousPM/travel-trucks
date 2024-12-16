import css from './PrimaryButton.module.css';

const PrimaryButton = ({ label = {} }) => {
  return (
    <button type="submit" className={css.button}>
      {label}
    </button>
  );
};

export default PrimaryButton;
