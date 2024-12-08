import Header from '../../components/Header/Header.jsx';
import css from './Catalog.module.css';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import CamperCard from '../../components/CamperCard/CamperCard';
import LocationForm from '../../components/LocationForm/LocationForm.jsx';
import { useState } from 'react';
import Filters from '../../components/Filters/Filters.jsx';

const Catalog = () => {
  return (
    <>
      <Header />
      <section className={css.catalog}>
        <div className={css.rightWrapper}>
          <LocationForm />
          <Filters />
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
