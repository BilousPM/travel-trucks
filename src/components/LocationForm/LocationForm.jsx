import { Field, Form, Formik } from 'formik';
import css from './LocationForm.module.css';

const LocationForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.input}>
        <Field type="text" name="location" />
      </Form>
    </Formik>
  );
};

export default LocationForm;
