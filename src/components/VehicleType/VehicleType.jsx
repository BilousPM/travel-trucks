import css from '../VehicleEquipment/VehicleEquipment.module.css';

// const vehicleTypes = ['Van', 'Fully Integrated', 'Alcove'];

const VehicleType = ({ onChange, value }) => {
  return (
    <div>
      <h2 className={css.title}>Vehicle type</h2>
      <div className={css.line}></div>
      <label>
        <input
          checked={value === 'Van'}
          onChange={onChange}
          type="radio"
          name="vehicleType"
          value="Van"
        />
        <span>Van</span>
      </label>
      <label>
        <input
          checked={value === 'Fully Integrated'}
          onChange={onChange}
          type="radio"
          name="vehicleType"
          value="Fully Integrated"
        />
        <span>Fully Integrated</span>
      </label>
      <label>
        <input
          checked={value === 'Alcove'}
          onChange={onChange}
          type="radio"
          name="vehicleType"
          value="Alcove"
        />
        <span>Alcove</span>
      </label>
    </div>
  );
};

export default VehicleType;
