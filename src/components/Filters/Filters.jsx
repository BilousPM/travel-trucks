import { useState } from 'react';
import LocationInput from '../LocationInput/LocationInput.jsx';
import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../VehicleType/VehicleType.jsx';

const Filters = ({ campers }) => {
  const [formData, setFormData] = useState({
    selectLocation: 'Kyiv, Ukraine',
    vehicleEquipment: [],
    vehicleType: '',
  });

  const locations = campers.map(camper =>
    camper.location.replace(/(.*?),\s*(.*)/, '$2, $1'),
  );
  const cities = [...new Set(locations)];

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChangeInput = e => {
    const { name, value, checked } = e.target;
    if (name !== 'vehicleEquipment') {
      setFormData({ ...formData, [name]: value });
    }

    if (name === 'vehicleEquipment') {
      setFormData(prevState => ({
        ...prevState,
        vehicleEquipment: checked
          ? [...prevState.vehicleEquipment, value]
          : prevState.vehicleEquipment.filter(item => item !== value),
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <LocationInput
        cities={cities}
        value={formData.selectLocation}
        onChange={handleChangeInput}
      />
      <VehicleEquipment onChange={handleChangeInput} />
      <VehicleType onChange={handleChangeInput} value={formData.vehicleType} />
      <PrimaryButton label="Search" />
    </form>
  );
};

export default Filters;
