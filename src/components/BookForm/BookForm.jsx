import { Field, Form, Formik } from 'formik';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import s from './Bookform.module.css';
const BookForm = () => {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  const handleSubmit = (data, action) => {
    console.log(data);
    action.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field type="name" name="name" />
          </label>
          <label>
            <Field type="mail" name="email" />
          </label>
          <label>
            {' '}
            <Field type="data" name="date" />
          </label>
          <label>
            <Field as="textarea" name="comment" />
          </label>
          <PrimaryButton label="Send" />
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
