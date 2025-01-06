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
              src={camper.gallery[0].thumb}
              alt="Vehicle"
              width={292}
              height={320}
            />
          </div>
          <div className={s.rightWrapper}>
            <div>
              <div className={s.headerWrapper}>
                <h2 className={s.name}>{camper.name}</h2>
                <p className={s.price}>€{camper.price.toFixed(2)}</p>
              </div>
              <div className={s.reviewsWrapper}>
                <p>
                  {camper.rating}({camper.reviews.length} Reviews)
                </p>
                <p>{camper.location.replace(/(.*?),\s*(.*)/, '$2, $1')}</p>
              </div>
            </div>
            <p className={s.text}>{camper.description}</p>

            <NavLink to={camper.id.toString()} className={css.button}>
              Show more
            </NavLink>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CamperCardList;
