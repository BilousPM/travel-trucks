import s from './VehicleEquipment.module.css';

const VehicleEquipment = ({ onChange }) => {
  const options = ['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'];

  return (
    <div className={s.equipmentWrapper}>
      <h2 className={s.title}>Vehicle equipment</h2>
      <div className={s.line}></div>
      <ul className={s.list}>
        {options.map(option => (
          <li key={option} className={s.item}>
            <label>
              <span>{option}</span>
              <input
                onChange={onChange}
                type="checkbox"
                name="vehicleEquipment"
                value={option}
                className={s.input}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleEquipment;
