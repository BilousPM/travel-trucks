import { NavLink, Outlet, useParams } from 'react-router-dom';
import s from './CamperPage.module.css';
import { useEffect, useState } from 'react';
import { getCamperById } from '../../config/campersApi.js';
import BookForm from '../../components/BookForm/BookForm.jsx';

const CamperPage = () => {
  const [camper, setCamper] = useState(null);
  const { camperId } = useParams();

  useEffect(() => {
    const fetchCamperById = async id => {
      try {
        const data = await getCamperById(id);
        console.log(data);
        setCamper(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCamperById(camperId);
  }, [camperId]);

  if (!camper) {
    return <h2>Loading...</h2>;
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
