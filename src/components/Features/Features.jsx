import s from './Features.module.css';

const Features = () => {
  return (
    <div className={s.featuresWrapper}>
      <ul>
        <li>
          <svg className={s} width="20" height="20">
            <use href=""></use>
            <p></p>
          </svg>
        </li>
      </ul>
      <h2>Vehicle details</h2>
      <div></div>
      <ul>
        <li>
          <p></p>
          <p></p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
