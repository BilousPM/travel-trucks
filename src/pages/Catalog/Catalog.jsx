import Header from '../../components/Header/Header.jsx';
import css from './Catalog.module.css';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import CamperCard from '../../components/CamperCard/CamperCard';

const Catalog = () => {
  return (
    <>
      <Header />
      <section className={css.catalog}>
        <div>
          <PrimaryButton />
        </div>
        <div>
          <CamperCard />
        </div>
      </section>
    </>
  );
};

export default Catalog;
