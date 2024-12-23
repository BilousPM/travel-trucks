import s from './VehicleType.module.css';

// const vehicleTypes = ['Van', 'Fully Integrated', 'Alcove'];

const VehicleType = ({ onChange, value }) => {
  return (
    <div className={s.vehicleType}>
      <h2 className={s.title}>Vehicle type</h2>
      <div className={s.line}></div>
      <div className={s.wrapper}>
        <ul className={s.list}>
          <li className={s.item}>
            <label>
              <input
                checked={value === 'Van'}
                onChange={onChange}
                type="radio"
                name="vehicleType"
                value="Van"
                className={s.input}
              />
              <span>Van</span>
            </label>
          </li>{' '}
          <li className={s.item}>
            <label>
              <input
                checked={value === 'Fully Integrated'}
                onChange={onChange}
                type="radio"
                name="vehicleType"
                value="Fully Integrated"
                className={s.input}
              />
              <span>Fully Integrated</span>
            </label>
          </li>
          <li className={s.item}>
            <label>
              <input
                checked={value === 'Alcove'}
                onChange={onChange}
                type="radio"
                name="vehicleType"
                value="Alcove"
                className={s.input}
              />
              <span>Alcove</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VehicleType;
