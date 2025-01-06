import s from './Catalog.module.css';
import CamperCardList from '../../components/CamperCardList/CamperCardList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { useEffect, useState } from 'react';

import { PropagateLoader } from 'react-spinners';

import { getCampers } from '../../config/campersApi.js';

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState({});

  useEffect(() => {
    const fetchCampersList = async query => {
      try {
        setLoading(true);
        console.log(query);
        const data = await getCampers(query);
        setCampers(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCampersList(query);
  }, [query]);

  // console.log(query);

  return (
    <>
      <section className={s.catalog}>
        <div className={s.formWrapper}>
          <Filters campers={campers} handleQuery={setQuery} />
        </div>
        <div className={s.cardsWrapper}>
          <PropagateLoader
            color={'darkRed'}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            margin="0 auto"
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
