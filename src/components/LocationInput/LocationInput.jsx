import { useId } from 'react';
import s from './LocationInput.module.css';

const LocationInput = ({ cities }) => {
  const selectId = useId();

  return (
    <div className={s.inputWrapper}>
      <label htmlFor={selectId} className={s.label}>
        location
      </label>
      <select name="location" id={selectId} className={s.input}>
        {cities.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationInput;
