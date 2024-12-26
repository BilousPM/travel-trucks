import s from './Catalog.module.css';
import CamperCardList from '../../components/CamperCardList/CamperCardList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { useEffect, useState } from 'react';

import { PropagateLoader } from 'react-spinners';

import { getCampers } from '../../config/campersApi.js';

// const override: import('react').CSSProperties = {
//   display: 'block',
//   margin: '0 auto',
//   borderColor: 'red',
// };

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCampersList = async () => {
      try {
        setLoading(true);
        const data = await getCampers();
        setCampers(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCampersList();
  }, []);

  return (
    <>
      <section className={s.catalog}>
        <div className={s.formWrapper}>
          <Filters campers={campers} />
        </div>
        <div>
          <PropagateLoader
            color={'teal'}
            loading={loading}
            // cssOverride={override}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            display={'block'}
            margin={'0 auto'}
          />
          {campers.length > 0 ? (
            <CamperCardList items={campers} />
          ) : (
            <p style={{ color: 'white' }}>
              Something Went Wrong ! Try again...
            </p>
          )}
          {campers.length > 0 && (
            <button type="button" className={s.loadMore}>
              Load more
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Catalog;
