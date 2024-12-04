import { Field, Form, Formik } from 'formik';
import css from './LocationForm.module.css';

// const iinitialValues = {
//   location: 'Kyiv, Ukraine',
// };

const LocationForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <label htmlFor={location} className={css.label}>
          Location
        </label>
        <Field
          // as="select"
          type="text"
          name="location"
          className={css.input}
          id={location}
        >
          {/* <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option> */}
        </Field>
      </Form>
    </Formik>
  );
};

export default LocationForm;
