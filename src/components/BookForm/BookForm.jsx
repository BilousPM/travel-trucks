import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import s from './Bookform.module.css';
const BookForm = () => {
  return (
    <div className={s.formWrapper}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <PrimaryButton label="Send" />
    </div>
  );
};

export default BookForm;
