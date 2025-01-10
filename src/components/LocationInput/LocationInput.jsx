// import { useState } from 'react';
// import s from './LocationInput.module.css';

// const AutoCompleteInput = ({ suggestions }) => {
//   const [inputValue, setInputValue] = useState('');
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);

//   const handleInputChange = e => {
//     const value = e.target.value;
//     setInputValue(value);

//     if (value.trim() !== '') {
//       const filtered = suggestions.filter(suggestion =>
//         suggestion.toLowerCase().includes(value.toLowerCase()),
//       );
//       setFilteredSuggestions(filtered);
//       setSuggestionsVisible(true);
//     } else {
//       setFilteredSuggestions([]);
//       setSuggestionsVisible(false);
//     }
//   };

//   const handleSuggestionClick = suggestion => {
//     setInputValue(suggestion);
//     setSuggestionsVisible(false);
//   };

//   return (
//     <div className={s.wrapper}>
//       <input
//         className={s.locationInput}
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         onBlur={() => setTimeout(() => setSuggestionsVisible(false), 200)}
//         onFocus={() => inputValue && setSuggestionsVisible(true)}
//       />
//       {isSuggestionsVisible && filteredSuggestions.length > 0 && (
//         <ul className={s.listOfTips}>
//           {filteredSuggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               onClick={() => handleSuggestionClick(suggestion)}
//               className={s.tipItem}
//               onMouseOver={e => (e.target.style.backgroundColor = '#e6e6e6')}
//               onMouseOut={e => (e.target.style.backgroundColor = '#f9f9f9')}
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AutoCompleteInput;

// import s from './LocationInput.module.css';

// const LocationInput = ({ cities, value, onChange }) => {
//   return (
//     <div className={s.inputWrapper}>
//       <label>
//         <span className={s.label}>Location</span>
//         <select
//           value={value}
//           name="selectLocation"
//           className={s.input}
//           onChange={onChange}
//         >
//           {cities.map(city => (
//             <option key={city} value={city}>
//               {city}
//             </option>
//           ))}
//         </select>
//       </label>
//     </div>
//   );
// };

// export default LocationInput;
