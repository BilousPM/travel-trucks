import s from './Catalog.module.css';
// import Filters from '../../components/Filters/Filters.jsx';
import { useEffect } from 'react';

// import { PropagateLoader } from 'react-spinners';

// import { getCampers } from '../../config/campersApi.js';
import FiltrationForm from '../../components/FiltrationForm/FiltrationForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import CamperCardList from '../../components/CamperCardList/CamperCardList.jsx';
import { fetchCampersThunk } from '../../redux/campers/operations.js';
import {
  selectCampers,
  selectIsLoading,
  selectPage,
  selectSelectedValue,
  selectTotalPages,
} from '../../redux/campers/selectors.js';
import { loadMore, resetCampers } from '../../redux/campers/slice.js';
// import { setPages } from '../../redux/campers/slice.js';
// import { setPage } from '../../redux/campers/slice.js';
// import AutoCompleteInput from '../../components/LocationInput/LocationInput.jsx';

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const query = useSelector(selectSelectedValue);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(resetCampers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCampersThunk({ page, query }));
  }, [dispatch, query, page]);

  if (isLoading) {
    return <h1>Loadding ....</h1>;
  }
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.sectionWrapper}>
          <div className={s.formWrapper}>
            <FiltrationForm />
          </div>

          <div className={s.cardsWrapper}>
            {isLoading && <h1>LOADING...</h1>}
            {campers.length > 0 ? (
              <CamperCardList />
            ) : (
              <p style={{ color: 'white' }}>
                Something Went Wrong ! Try again...
              </p>
            )}
            {campers.length < totalPages && (
              <button
                type="button"
                className={s.loadMore}
                onClick={() => {
                  dispatch(loadMore());
                }}
              >
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
