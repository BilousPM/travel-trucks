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
} from '../../redux/campers/selectors.js';
// import { setPage } from '../../redux/campers/slice.js';
// import AutoCompleteInput from '../../components/LocationInput/LocationInput.jsx';

// const suggestions = [
//   'Kyiv',
//   'Poltava',
//   'Dnipro',
//   'Odesa',
//   'Kharkiv',
//   'Sumy',
//   'Lviv',
// ];

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCampersThunk());
  }, [dispatch]);
  // const [selectedValue, setSelectedValue] = useState('');
  // const [campers, setCampers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1)

  // useEffect(() => {
  //   const fetchCampersList = async query => {
  //     try {
  //       setLoading(true);
  //       const data = await getCampers(query, page);
  //       setCampers(prev => [...prev, ...data]);
  //     } catch (e) {
  //       console.log(e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCampersList(selectedValue);
  // }, []);

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.sectionWrapper}>
          <div className={s.formWrapper}>
            <FiltrationForm
            // suggestions={suggestions}
            // handleQuery={setSelectedValue}
            // setCampers={setCampers}
            // setPage={setPage}
            />
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
            {campers.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  dispatch(setPage());
                  // setPage(pref => pref + 1);
                }}
                className={s.loadMore}
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
