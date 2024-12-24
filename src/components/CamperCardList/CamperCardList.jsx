import { NavLink } from 'react-router-dom';

import s from './CamperCardList.module.css';
import css from '../PrimaryButton/PrimaryButton.module.css';
const CamperCardList = ({ items }) => {
  // console.log(camper.gallery[0].original);
  return (
    <ul>
      {items.map((camper, index) => (
        <li key={index} className={s.card}>
          <div className={s.imgWrapper}>
            <img
              src={camper.gallery[0].original}
              alt="Vehicle"
              width={292}
              height={320}
            />
          </div>
          <div className={s.rightWrapper}>
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
            <p className={s.text}>
              Embrace simplicity and freedom with the Mavericks panel truck...
            </p>

            <NavLink to="/catalog:id" className={css.button}>
              Show more
            </NavLink>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CamperCardList;
