import s from './LocationInput.module.css';

const LocationInput = ({ cities, value, onChange }) => {
  return (
    <div className={s.inputWrapper}>
      <label>
        <span className={s.label}>Location</span>
        <select
          value={value}
          name="selectLocation"
          className={s.input}
          onChange={onChange}
        >
          {cities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default LocationInput;
