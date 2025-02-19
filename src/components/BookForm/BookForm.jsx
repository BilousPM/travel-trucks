import { Field, Form, Formik } from 'formik';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import s from './Bookform.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../redux/campers/selectors.js';
import { setFeedbackRequest } from '../../redux/campers/slice.js';
import clsx from 'clsx';

const BookForm = () => {
  const feedbackRequest = useSelector(request);
  const dispatch = useDispatch();

  console.log(feedbackRequest);

  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  // useEffect(() => {
  //   dispatch(setFeedbackRequest());
  //   console.log('hi');
  // }, []);

  const handleSubmit = (data, action) => {
    console.log(data);
    action.resetForm();
    dispatch(setFeedbackRequest(true));
  };

  return (
    <div className={s.formWrapper}>
      {feedbackRequest && (
        <div className={s.responseWrapper}>
          <h3 className={s.responseText}>
            We have received your booking request and will call you back as soon
            as possible
          </h3>{' '}
        </div>
      )}
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <Field
              type="name"
              name="name"
              className={s.input}
              placeholder="Name*"
            />
          </label>
          <label>
            <Field
              type="mail"
              name="email"
              className={s.input}
              placeholder="Email*"
            />
          </label>
          <label>
            <Field
              type="data"
              name="date"
              className={s.input}
              placeholder="Booking date*"
            />
          </label>
          <label>
            <Field
              as="textarea"
              name="comment"
              className={clsx(s.input, s.textarea)}
              placeholder="Comment"
            />
          </label>
          <PrimaryButton label="Send" />
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;

{
  /* */
}
