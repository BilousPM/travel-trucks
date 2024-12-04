import Header from '../../components/Header/Header.jsx';
import css from './Catalog.module.css';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import CamperCard from '../../components/CamperCard/CamperCard';
import LocationForm from '../../components/LocationForm/LocationForm.jsx';
import VehicleEqpt from '../../components/VehicleEqpt/VehicleEqpt.jsx';

const Catalog = () => {
  return (
    <>
      <Header />
      <section className={css.catalog}>
        <div>
          <LocationForm />
          <p>Filters</p>
          <VehicleEqpt />
          <PrimaryButton label="Search" />
        </div>
        <div>
          <CamperCard />
        </div>
      </section>
    </>
  );
};

export default Catalog;
