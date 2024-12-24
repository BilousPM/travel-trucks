import s from './Catalog.module.css';
import CamperCardList from '../../components/CamperCardList/CamperCardList.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCampersList = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers',
        );
        setCampers(response.data.items);
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
          {loading && <p>Loading data, please wait...</p>}
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
