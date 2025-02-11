import { selectCamperById } from '../../redux/campers/selectors.js';
import s from './Reviews.module.css';
import { useSelector } from 'react-redux';

const Reviews = () => {
  const camper = useSelector(selectCamperById);
  console.log(camper.reviews);

  return (
    <div className={s.reviewWrapper}>
      <ul>
        {camper.reviews.map(review => {
          <li>
            <div></div>
            <h2>{review.reviewer_name}</h2>
            <span>*</span>
            <p>{review.coment} </p>
          </li>;
        })}

        <li>
          <div></div>
          <h2>Name</h2>
          <span>*</span>
        </li>
      </ul>
      <p></p>
    </div>
  );
};

export default Reviews;
