// import ListItem from '../ListItem/ListItem.jsx';
// import Grid from '../Grid/Grid.jsx';
import s from './VehicleEquipment.module.css';

// const equipment = [
//   { label: 'AC', selected: true },
//   { label: 'Automatic', selected: false },
//   { label: 'Kitchen', selected: false },
//   { label: 'TV', selected: false },
//   { label: 'Bathroom', selected: true },
// ];

// const VehicleEquipment = () => {
//   return (
//     <div className={css.equipmentWrapper}>
//       <h2 className={css.title}>Vehicle equipment</h2>
//       <div className={css.line}></div>
//       <Grid>
//         {equipment.map(({ label }, index) => (
//           <ListItem key={index} label={label} />
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default VehicleEquipment;

const VehicleEquipment = ({ onChange }) => {
  const options = [
    { id: 'ac', label: 'AC', icon: '🌬️' },
    { id: 'automatic', label: 'Automatic', icon: '⚙️' },
    { id: 'kitchen', label: 'Kitchen', icon: '☕' },
    { id: 'tv', label: 'TV', icon: '📺' },
    { id: 'bathroom', label: 'Bathroom', icon: '🚿' },
  ];

  return (
    <div className={s.equipmentWrapper}>
      <h2 className={s.title}>Vehicle equipment</h2>
      <div className={s.line}></div>
      <label>
        <span>AC</span>
        <input
          onChange={onChange}
          type="checkbox"
          name="vehicleEquipment"
          value="AC"
          // className={s.item}
        />
      </label>
      <label>
        <span>Automatic</span>
        <input
          onChange={onChange}
          type="checkbox"
          name="vehicleEquipment"
          value="Automatic"
          // className={s.item}
        />
      </label>
      <label>
        <span>Kitchen</span>
        <input
          onChange={onChange}
          type="checkbox"
          name="vehicleEquipment"
          value="Kitchen"
          // className={s.item}
        />
      </label>
      <label>
        <span>TV</span>
        <input
          onChange={onChange}
          type="checkbox"
          name="vehicleEquipment"
          value="TV"
          // className={s.item}
        />
      </label>
      <label>
        <span>Bathroom</span>
        <input
          onChange={onChange}
          type="checkbox"
          name="vehicleEquipment"
          value="Bathroom"
          // className={s.item}
        />
      </label>
    </div>
  );
};

export default VehicleEquipment;
