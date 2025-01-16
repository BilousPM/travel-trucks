import { NavLink } from 'react-router-dom';
import s from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { camperSelector } from '../../redux/campers/selectors.js';
import { increments } from '../../redux/campers/actions.js';
const Home = () => {
  const campers = useSelector(camperSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increments());
    console.log(campers);
  };

  return (
    <section className={s.hero}>
      <h1 className={s.title}>Campers of your dreams</h1>
      <h2 className={s.subTitle}>
        You can find everything you want in our catalog
      </h2>
      <NavLink to="/catalog" className={s.button}>
        View Now
      </NavLink>
      <button type="button" onClick={handleClick}>
        Test Button
      </button>
    </section>
  );
};

export default Home;
