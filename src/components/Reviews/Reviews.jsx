import s from './Reviews.module.css';

const Reviews = () => {
  return (
    <div className={s.reviewWrapper}>
      <ul>
        <li>
          <div>
            <p></p>
          </div>
          <h2>Name</h2>
          <span>*</span>
        </li>
      </ul>
      <p></p>
    </div>
  );
};

export default Reviews;
