import css from './PrimaryButton.module.css';

const PrimaryButton = ({ label = {} }) => {
  return (
    <button type="button" className={css.button}>
      {label}
    </button>
  );
};

export default PrimaryButton;
