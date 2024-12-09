import css from './CamperCard.module.css';

const CamperCard = ({ children }) => {
  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img width={292} height={320} />
      </div>
      <div>
        <div className={css.headerWrapper}>
          <h2 className={css.name}>Mavericks</h2>
          <p className={css.price}>€8000.00</p>
        </div>
        <div className={css.reviewsWrapper}>
          <p>4.4(2 Reviews)</p>
          <p>Kyiv, Ukraine</p>
        </div>
        <p className={css.text}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>
        {children}
      </div>
    </div>
  );
};

export default CamperCard;
