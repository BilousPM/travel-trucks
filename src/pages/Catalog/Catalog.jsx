import Header from '../../components/Header/Header.jsx';
import css from './Catalog.module.css';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import CamperCard from '../../components/CamperCard/CamperCard';
import LocationForm from '../../components/LocationForm/LocationForm.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import VehicleEquipment from '../../components/VehicleEquipment/VehicleEquipment.jsx';
import VehicleType from '../../components/VehicleType/VehicleType.jsx';
import FeaturesList from '../../components/FeaturesList/FeaturesList.jsx';

const catalog = [
  'Mavericks',
  'Kuga Camper',
  'Road Bear C 23-25',
  'Mighty Class C Medium [MD]',
];

const Catalog = () => {
  return (
    <>
      <Header />
      <section className={css.catalog}>
        <div>
          <LocationForm />
          <Filters>
            <VehicleEquipment />
            <VehicleType />
          </Filters>
          <PrimaryButton label="Search" />
        </div>
        <div>
          <ul>
            {catalog.map((car, index) => (
              <li key={index} className={css.listItem}>
                <CamperCard name={car}>
                  <FeaturesList />
                  <PrimaryButton label="Show more" />
                </CamperCard>
              </li>
            ))}
          </ul>
          <button type="button" className={css.loadMore}>
            Load more
          </button>
        </div>
      </section>
    </>
  );
};

export default Catalog;
