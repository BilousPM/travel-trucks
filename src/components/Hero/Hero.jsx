import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import css from './Hero.module.css';

const style = { minWidth: '173px' };
const Hero = () => {
  return (
    <section className={css.hero}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <h2 className={css.subTitle}>
        You can find everything you want in our catalog
      </h2>
      <PrimaryButton label="View Now" style={style}></PrimaryButton>
    </section>
  );
};

export default Hero;
