// import ListItem from '../ListItem/ListItem.jsx';
// import Grid from '../Grid/Grid.jsx';
import s from './VehicleEquipment.module.css';

const VehicleEquipment = ({ onChange }) => {
  const options = ['AC'];

  return (
    <div className={s.equipmentWrapper}>
      <h2 className={s.title}>Vehicle equipment</h2>
      <div className={s.line}></div>
      <ul>
        {options.map(option => (
          <li key={option} className={s.item}>
            <label>
              <span>{option}</span>
              <input
                className={s.input}
                onChange={onChange}
                type="checkbox"
                name="vehicleEquipment"
                value={option}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleEquipment;
