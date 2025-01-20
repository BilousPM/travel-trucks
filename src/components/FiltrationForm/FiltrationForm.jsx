import { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import s from './FiltrationForm.module.css';
import { Field, Form, Formik } from 'formik';
import clsx from 'clsx';

const FiltrationForm = ({ setCampers, suggestions, handleQuery, setPage }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);

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
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        ([key, value]) => value === true || typeof value === 'string',
      ),
    );

    handleQuery([]);
    setCampers([]);
    setPage(1);
    handleQuery(filteredData);
    actions.resetForm();
  };

  const handleInputChange = (e, setFieldValue) => {
    const value = e.target.value;
    setFieldValue('location', value);
    console.log(value);

    if (value.trim() !== '') {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredSuggestions(filtered);
      setSuggestionsVisible(true);
    } else {
      setFilteredSuggestions([]);
      setSuggestionsVisible(false);
    }
  };

  const handleSuggestionClick = (e, setFieldValue, suggestion) => {
    setFieldValue('location', suggestion);
    setSuggestionsVisible(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue, values }) => (
        <Form>
          <h2 className={s.label}>Location</h2>
          <label className={s.wrapper}>
            <Field
              name="location"
              className={s.locationInput}
              type="text"
              value={values.location}
              onChange={e => handleInputChange(e, setFieldValue)}
              autoComplete="off"
            />
            {isSuggestionsVisible && filteredSuggestions.length > 0 && (
              <ul className={s.listOfTips}>
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={e =>
                      handleSuggestionClick(e, setFieldValue, suggestion)
                    }
                    onMouseOver={e =>
                      (e.target.style.backgroundColor = '#e6e6e6')
                    }
                    onMouseOut={e =>
                      (e.target.style.backgroundColor = '#f9f9f9')
                    }
                    className={s.tipItem}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </label>
          <h2 className={clsx(s.label, s.labelFilter)}>Filters</h2>
          <h3 className={s.itemGroupLabel}>Vehicle equipment</h3>
          <div className={s.line}></div>
          <div className={s.itemWrapper}>
            <label>
              <div className={s.item}>
                <span>AC</span>
                <Field name="AC" type="checkbox" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <svg className={s.icon}>
                  <use href="../../images/symbol-defs.svg#icon-wind"></use>
                </svg>
                <span>Automatic</span>
                <Field name="transmission" type="checkbox" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <svg className={s.icon} width={32} height={32}>
                  <use href="../../images/symbol-defs.svg#icon-kitchen"></use>
                </svg>
                <span>Kitchen</span>
                <Field name="kitchen" type="checkbox" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <svg className={s.icon} width={32} height={32}>
                  <use href="../../images/symbol-defs.svg#icon-"></use>
                </svg>
                <span>TV</span>
                <Field name="TV" type="checkbox" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <svg className={s.icon} width={32} height={32}>
                  <use href="../../images/symbol-defs.svg#icon-"></use>
                </svg>
                <span>Bathroom</span>
                <Field name="bathroom" type="checkbox" />
              </div>
            </label>
          </div>
          <h3 className={s.itemGroupLabel}>Vehicle type</h3>
          <div className={s.line}></div>
          <div className={clsx(s.itemWrapper, s.itemWrapperVehicleType)}>
            <label>
              <div className={s.item}>
                <svg className={s.icon} width={32} height={32}>
                  <use href="../../images/symbol-defs.svg#icon-"></use>
                </svg>
                <span>Van</span>
                <Field name="form" type="radio" value="panelTruck" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <svg className={s.icon} width={32} height={32}>
                  <use href="../../images/symbol-defs.svg#icon-"></use>
                </svg>
                <span>Fully Integrated</span>
                <Field name="form" type="radio" value="fullyIntegrated" />
              </div>
            </label>
            <label>
              <div className={s.item}>
                <svg className={s.icon} width={32} height={32}>
                  <use href="../../images/symbol-defs.svg#icon-"></use>
                </svg>
                <span>Alcove</span>
                <Field name="form" type="radio" value="alcove" />
              </div>
            </label>
          </div>
          <PrimaryButton label="Search" />
        </Form>
      )}
    </Formik>
  );
};

export default FiltrationForm;
