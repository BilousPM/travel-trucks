import { useState } from 'react';
// import AutoCompleteInput from '../LocationInput/LocationInput.jsx';
// import LocationInput from '../LocationInput/LocationInput.jsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import s from './FiltrationForm.module.css';
import { Field, Form, Formik } from 'formik';

const FiltrationForm = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
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
    console.log(data);
    actions.resetForm();
  };

  const handleInputChange = (e, setFieldValue) => {
    const value = e.target.value;
    setInputValue(value);
    setFieldValue('location', value);
    console.log(value);

    // if (value.trim() !== '') {
    //   const filtered = suggestions.filter(suggestion =>
    //     suggestion.toLowerCase().includes(value.toLowerCase()),
    //   );
    //   setFilteredSuggestions(filtered);
    //   setSuggestionsVisible(true);
    // } else {
    //   setFilteredSuggestions([]);
    //   setSuggestionsVisible(false);
    // }
  };

  // const handleSuggestionClick = suggestion => {
  //   setInputValue(suggestion);
  //   setSuggestionsVisible(false);
  // };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue, values }) => (
          <Form>
            <h2>Location</h2>
            {/* <AutoCompleteInput suggestions={suggestions} /> */}
            <label className={s.wrapper}>
              <Field
                name="location"
                className={s.locationInput}
                type="text"
                value={values.location}
                onChange={e => handleInputChange(e, setFieldValue)}
                // onBlur={() => setTimeout(() => setSuggestionsVisible(false), 200)}
                // onFocus={() => inputValue && setSuggestionsVisible(true)}
              />
              {/* {isSuggestionsVisible && filteredSuggestions.length > 0 && (
              <ul className={s.listOfTips}>
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={s.tipItem}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )} */}
            </label>
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
        )}
      </Formik>
    </div>
  );
};

export default FiltrationForm;

// import AutoCompleteInput from '../LocationInput/LocationInput.jsx';
// // import LocationInput from '../LocationInput/LocationInput.jsx';
// import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
// import s from './FiltrationForm.module.css';
// import { Field, Form, Formik } from 'formik';

// const FiltrationForm = ({ suggestions }) => {
//   const initialValues = {
//     location: '',
//     AC: false,
//     transmission: false,
//     kitchen: false,
//     TV: false,
//     bathroom: false,
//     form: '',
//   };

//   const handleSubmit = (data, actions) => {
//     console.log(data);
//     actions.resetForm();
//   };

//   return (
//     <div className={s.formWrapper}>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//           <h2>Location</h2>
//           <AutoCompleteInput suggestions={suggestions} />
//           {/* <label>
//             <Field as="select" name="location" />
//             <option value=""></option>
//           </label> */}
//           <h2>Filters</h2>

//           <h3>Vehicle equipment</h3>
//           <div className={s.itemWrapper}>
//             <label>
//               <div className={s.item}>
//                 <span>AC</span>
//                 <Field name="AC" type="checkbox" />
//               </div>
//             </label>
//             <label>
//               <div className={s.item}>
//                 <span>Automatic</span>
//                 <Field name="transmission" type="checkbox" />
//               </div>
//             </label>
//             <label>
//               <div className={s.item}>
//                 <span>Kitchen</span>
//                 <Field name="kitchen" type="checkbox" />
//               </div>
//             </label>
//             <label>
//               <div className={s.item}>
//                 <span>TV</span>
//                 <Field name="TV" type="checkbox" />
//               </div>
//             </label>
//             <label>
//               <div className={s.item}>
//                 <span>Bathroom</span>
//                 <Field name="bathroom" type="checkbox" />
//               </div>
//             </label>
//           </div>

//           <h3>Vehicle type</h3>
//           <div className={s.itemWrapper}>
//             <label>
//               <div className={s.item}>
//                 <span>Van</span>
//                 <Field name="form" type="radio" value="panelTruck" />
//               </div>
//             </label>
//             <label>
//               <div className={s.item}>
//                 <span>Fully Integrated</span>
//                 <Field name="form" type="radio" value="fullyIntegrated" />
//               </div>
//             </label>
//             <label>
//               <div className={s.item}>
//                 <span>Alcove</span>
//                 <Field name="form" type="radio" value="alcove" />
//               </div>
//             </label>
//           </div>

//           <PrimaryButton label="Search" />
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default FiltrationForm;
