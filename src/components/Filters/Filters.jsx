import LocationInput from '../LocationInput/LocationInput.jsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
// import s from './Filters.module.css';

const Filters = ({ campers }) => {
  // const id = useId();

  const locations = campers.map(camper =>
    camper.location.replace(/(.*?),\s*(.*)/, '$2, $1'),
  );
  const cities = [...new Set(locations)];
  // console.log(cities);
  // console.log(locations);

  // console.log(campers);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form.elements.location.value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <LocationInput cities={cities} />
      <VehicleEquipment />
      <PrimaryButton label="Search" />
    </form>
  );
};

export default Filters;

// const Filters = ({ children }) => {
//   return (
//     <div className={css.filterWrapper}>
//       <p className={css.filter}>Filters</p>
//       {children}
//     </div>
//   );
// };locstion

// export default Filters;
