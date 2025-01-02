import { NavLink, useParams } from 'react-router-dom';
import s from './CamperPage.module.css';
import { useEffect, useState } from 'react';
import { getCamperById } from '../../config/campersApi.js';

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
            <p>4.4(2 Reviews)</p>
            <p>Kyiv, Ukraine</p>
          </div>
        </div>
        <ul>
          {camper.gallery.map((item, index) => (
            <li key={index}>
              <img src={item.original} alt="Vehicle" width={292} height={312} />
            </li>
          ))}
        </ul>
        <p>{camper.description}</p>
        <NavLink to="">Features</NavLink>
        <NavLink to="">Reviews</NavLink>
        <div></div>
      </div>
    </section>
  );
};

export default CamperPage;
