import { selectCamperById } from '../../redux/campers/selectors.js';
import s from './Reviews.module.css';
import { useSelector } from 'react-redux';

const Reviews = () => {
  const camper = useSelector(selectCamperById);
  console.log(camper.reviews);

  return (
    <div className={s.reviewWrapper}>
      <ul>
        {camper.reviews.map((review, index) => {
          return (
            <li key={index}>
              <div className={s.avatarNameWrap}>
                <div className={s.avatar}>
                  <span className={s.avatarLetter}>
                    {review.reviewer_name[0].toUpperCase()}
                  </span>
                </div>
                <div>
                  <h2>{review.reviewer_name}</h2>
                  <span>*</span>
                </div>
              </div>
              <p>{review.comment} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
