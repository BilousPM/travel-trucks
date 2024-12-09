import ListItem from '../ListItem/ListItem.jsx';
import Grid from '../Grid/Grid.jsx';
import css from '../VehicleEquipment/VehicleEquipment.module.css';

const vehicleTypes = ['Van', 'Fully Integrated', 'Alcove'];

const VehicleType = () => {
  return (
    <div>
      <h2 className={css.title}>Vehicle type</h2>
      <div className={css.line}></div>
      <Grid>
        {vehicleTypes.map((type, index) => (
          <ListItem key={index} label={type} />
        ))}
      </Grid>
    </div>
  );
};

export default VehicleType;
