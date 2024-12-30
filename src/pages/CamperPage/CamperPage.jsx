import { NavLink } from 'react-router-dom';
import s from './CamperPage.module.css';

const CamperPage = () => {
  return (
    <section>
      <div>
        <div className={s.headerWrapper}>
          <h2 className={s.name}>Something</h2>
          <p className={s.price}>€5000</p>
        </div>
        <div className={s.reviewsWrapper}>
          <p>4.4(2 Reviews)</p>
          <p>Kyiv, Ukraine</p>
        </div>
      </div>
      <ul>
        <li></li>
      </ul>
      <p>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal
        choice for solo travelers or couples seeking a compact and efficient way
        to explore the open roads. This no-frills yet reliable panel truck
        offers the essentials for a comfortable journey, making it the perfect
        companion for those who value simplicity and functionality.
      </p>
      <NavLink to="">Features</NavLink>
      <NavLink to="">Reviews</NavLink>
      <div></div>
    </section>
  );
};

export default CamperPage;
