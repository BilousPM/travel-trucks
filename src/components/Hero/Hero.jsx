import { NavLink } from 'react-router-dom';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.hero}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <h2 className={css.subTitle}>
        You can find everything you want in our catalog
      </h2>
      <NavLink to="/catalog" className={css.button}>
        View Now
      </NavLink>
    </section>
  );
};

export default Hero;
