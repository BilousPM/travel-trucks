import Header from '../../components/Header/Header.jsx';
import s from './Catalog.module.css';
// import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import CamperCard from '../../components/CamperCard/CamperCard';
// import LocationForm from '../../components/LocationForm/LocationForm.jsx';
import Filters from '../../components/Filters/Filters.jsx';
// import VehicleEquipment from '../../components/VehicleEquipment/VehicleEquipment.jsx';
// import VehicleType from '../../components/VehicleType/VehicleType.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Catalog = () => {
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    const fetchCampersList = async () => {
      const response = await axios.get(
        'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers',
      );
      setCampers(response.data.items);
    };
    fetchCampersList();
  }, []);

  // console.log(campers);

  return (
    <>
      <Header />
      <section className={s.catalog}>
        <div className={s.formWrapper}>
          {/* <LocationForm /> */}
          <Filters campers={campers} />
          {/* <VehicleEquipment />
            <VehicleType />
          </Filters>
          <PrimaryButton label="Search" /> */}
        </div>
        <div>
          <ul>
            {campers.map((camper, index) => (
              <li key={index} className={s.listItem}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>
          <button type="button" className={s.loadMore}>
            Load more
          </button>
        </div>
      </section>
    </>
  );
};

export default Catalog;
