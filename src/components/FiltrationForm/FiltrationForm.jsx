import AutoCompleteInput from '../LocationInput/LocationInput.jsx';
// import LocationInput from '../LocationInput/LocationInput.jsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import s from './FiltrationForm.module.css';
import { Field, Form, Formik } from 'formik';

const FiltrationForm = ({ suggestions }) => {
  const initialValues = {
    location: '',
    AC: false,
    transmission: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    form: '',
  };

  const handleSubmit = (data, actions) => {
    console.log(data);
    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <h2>Location</h2>
          <AutoCompleteInput suggestions={suggestions} />
          {/* <label>
            <Field as="select" name="location" />
            <option value=""></option>
          </label> */}
          <h2>Filters</h2>

          <h3>Vehicle equipment</h3>
          <div className={s.itemWrapper}>
            <label>
              <div className={s.item}>
                <span>AC</span>
                <Field name="AC" type="checkbox" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <span>Automatic</span>
                <Field name="transmission" type="checkbox" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <span>Kitchen</span>
                <Field name="kitchen" type="checkbox" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <span>TV</span>
                <Field name="TV" type="checkbox" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <span>Bathroom</span>
                <Field name="bathroom" type="checkbox" />
              </div>
            </label>
          </div>

          <h3>Vehicle type</h3>
          <div className={s.itemWrapper}>
            <label>
              <div className={s.item}>
                <span>Van</span>
                <Field name="form" type="radio" value="panelTruck" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <span>Fully Integrated</span>
                <Field name="form" type="radio" value="fullyIntegrated" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <span>Alcove</span>
                <Field name="form" type="radio" value="alcove" />
              </div>
            </label>
          </div>

          <PrimaryButton label="Search" />
        </Form>
      </Formik>
    </div>
  );
};

export default FiltrationForm;
