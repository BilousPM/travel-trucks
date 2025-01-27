import { NavLink } from 'react-router-dom';

import s from './CamperCardList.module.css';
import css from '../PrimaryButton/PrimaryButton.module.css';
import { selectCampers } from '../../redux/campers/selectors.js';
import { useSelector } from 'react-redux';

const CamperCardList = () => {
  const campers = useSelector(selectCampers);

  // console.log(camper.gallery[0].original);
  return (
    <ul>
      {campers.map((camper, index) => (
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

            <NavLink
              to={camper.id.toString()}
              className={css.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              Show more
            </NavLink>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CamperCardList;
