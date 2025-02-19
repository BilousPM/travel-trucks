import { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import s from './FiltrationForm.module.css';
import { Field, Form, Formik } from 'formik';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setPages, setSelectedValue } from '../../redux/campers/slice.js';

const suggestions = [
  'Kyiv',
  'Poltava',
  'Dnipro',
  'Odesa',
  'Kharkiv',
  'Sumy',
  'Lviv',
];

const FiltrationForm = () => {
  const dispatch = useDispatch();
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

    dispatch(setSelectedValue(filteredData));
    dispatch(setPages(1));
    actions.resetForm();
  };

  const handleInputChange = (e, setFieldValue) => {
    const value = e.target.value;
    setFieldValue('location', value);

    if (value.trim() !== '') {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase()),
      );
      console.log(filtered);
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
          {/* location */}
          <h2 className={s.label}>Location</h2>
          <label className={s.wrapper}>
            <div className={s.inputWrapper}>
              <Field
                placeholder="City"
                name="location"
                className={s.locationInput}
                type="text"
                value={values.location}
                onChange={e => handleInputChange(e, setFieldValue)}
                autoComplete="off"
              />
              <svg className={s.icon} width={20} height={20}>
                <use href={'../../../public/icons.svg#icon-map'}></use>
              </svg>
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
            </div>
          </label>

          {/* vehicle equipment */}
          <h2 className={clsx(s.label, s.labelFilter)}>Filters</h2>
          <h3 className={s.itemGroupLabel}>Vehicle equipment</h3>
          <div className={s.line}></div>
          <div className={s.itemWrapper}>
            <label>
              <div className={clsx(s.item, values.AC ? s.isActive : '')}>
                <Field name="AC" type={'checkbox'} className={s.checkbox} />
                <svg className={s.equipmentIcon} width={32} height={32}>
                  <use href="../../../public/icons.svg#icon-ac"></use>
                </svg>
                <span className={s.checkboxSpan}>AC</span>
              </div>
            </label>

            <label>
              <div
                className={clsx(s.item, values.transmission ? s.isActive : '')}
              >
                <Field
                  name="transmission"
                  type="checkbox"
                  className={s.checkbox}
                />
                <svg className={s.equipmentIcon} width={32} height={32}>
                  <use href="../../../public/icons.svg#icon-automatic"></use>
                </svg>
                <span className={s.checkboxSpan}>Automatic</span>
              </div>
            </label>

            <label>
              <div className={clsx(s.item, values.kitchen ? s.isActive : '')}>
                <Field name="kitchen" type="checkbox" className={s.checkbox} />
                <svg className={s.equipmentIcon} width={32} height={32}>
                  <use href="../../../public/icons.svg#icon-kitchen"></use>
                </svg>
                <span className={s.checkboxSpan}>Kitchen</span>
              </div>
            </label>

            <label>
              <div className={clsx(s.item, values.TV ? s.isActive : '')}>
                <Field name="TV" type="checkbox" className={s.checkbox} />
                <svg className={s.equipmentIcon} width={32} height={32}>
                  <use href="../../../public/icons.svg#icon-tv"></use>
                </svg>
                <span className={s.checkboxSpan}>TV</span>
              </div>
            </label>

            <label>
              <div className={clsx(s.item, values.bathroom ? s.isActive : '')}>
                <Field name="bathroom" type="checkbox" className={s.checkbox} />
                <svg className={s.equipmentIcon} width={32} height={32}>
                  <use href="../../../public/icons.svg#icon-bathroom"></use>
                </svg>
                <span className={s.checkboxSpan}>Bathroom</span>
              </div>
            </label>
          </div>

          <h3 className={s.itemGroupLabel}>Vehicle type</h3>
          <div className={s.line}></div>
          <div className={clsx(s.itemWrapper, s.itemWrapperVehicleType)}>
            <label>
              <div
                className={clsx(
                  s.item,
                  values.form === 'panelTruck' ? s.isActive : '',
                )}
              >
                <Field
                  name="form"
                  type="radio"
                  value="panelTruck"
                  className={s.checkbox}
                />
                <svg className={s.equipmentIcon} width={32} height={32}>
                  <use href="../../../public/icons.svg#icon-van"></use>
                </svg>
                <span className={s.checkboxSpan}>Van</span>
              </div>
            </label>
            <label>
              <div
                className={clsx(
                  s.item,
                  values.form === 'fullyIntegrated' ? s.isActive : '',
                )}
              >
                <Field
                  name="form"
                  type="radio"
                  value="fullyIntegrated"
                  className={s.checkbox}
                />
                <svg className={s.equipmentIcon} width={32} height={32}>
                  <use href="../../../public/icons.svg#icon-fully"></use>
                </svg>
                <span className={s.checkboxSpan}>Fully Integrated</span>
              </div>
            </label>
            <label>
              <div
                className={clsx(
                  s.item,
                  values.form === 'alcove' ? s.isActive : '',
                )}
              >
                <Field
                  name="form"
                  type="radio"
                  value="alcove"
                  className={s.checkbox}
                />
                <svg className={s.equipmentIcon} width={32} height={32}>
                  <use href="../../../public/icons.svg#icon-alcove"></use>
                </svg>
                <span className={s.checkboxSpan}>Alcove</span>
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
