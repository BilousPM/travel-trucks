import { NavLink } from 'react-router-dom';
import s from './Home.module.css';
const Home = () => {
  return (
    <section className={s.hero}>
      <h1 className={s.title}>Campers of your dreams</h1>
      <h2 className={s.subTitle}>
        You can find everything you want in our catalog
      </h2>
      <NavLink to="/catalog" className={s.button}>
        View Now
      </NavLink>
    </section>
  );
};

export default Home;
