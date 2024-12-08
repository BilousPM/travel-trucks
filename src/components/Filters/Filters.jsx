import VehicleEqpt from '../VehicleEqpt/VehicleEqpt.jsx';
import css from './Filters.module.css';

const Filters = () => {
  return (
    <div>
      <p className={css.filter}>Filters</p>
      <VehicleEqpt />
    </div>
  );
};

export default Filters;
