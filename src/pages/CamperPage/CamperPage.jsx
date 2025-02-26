import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import s from './CamperPage.module.css';
import { useEffect } from 'react';
import BookForm from '../../components/BookForm/BookForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperById,
  selectIsError,
} from '../../redux/campers/selectors.js';
import { getCamperByIdThunk } from '../../redux/campers/operations.js';

const CamperPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { camperId } = useParams();

  const camper = useSelector(selectCamperById);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(getCamperByIdThunk(camperId));
  }, [dispatch, camperId]);

  useEffect(() => {
    if (location.pathname === `/catalog/${camperId}`) {
      navigate('features', { replace: true });
    }
  }, [navigate, location.pathname, camperId]);

  if (isError) {
    return <h2> something went wrong</h2>;
  }

  if (!camper) {
    return <h2>Loading ...!</h2>;
  }

  return (
    <section className={s.camperSection}>
      <div className="container">
        <div>
          <div className={s.headerWrapper}>
            <h2 className={s.name}>{camper.name}</h2>
            <p className={s.price}>€{camper.price}</p>
          </div>
          <div className={s.reviewsWrapper}>
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
            <p>{camper.location.split(', ').reverse().join(', ')}</p>
          </div>
        </div>
        <ul className={s.list}>
          {camper.gallery.map((item, index) => (
            <li key={index} className={s.imgWrapper}>
              <img src={item.original} alt="Vehicle" width={292} height={312} />
            </li>
          ))}
        </ul>
        <p>{camper.description}</p>

        <NavLink to="features">Features</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <div></div>
        <div className={s.featuresWrapper}>
          <Outlet />
          <BookForm />
        </div>
      </div>
    </section>
  );
};

export default CamperPage;
