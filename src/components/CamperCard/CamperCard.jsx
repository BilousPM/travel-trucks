import css from './CamperCard.module.css';

const CamperCard = ({ children, camper }) => {
  console.log(camper.gallery[0].original);
  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img
          src={camper.gallery[0].thumb}
          alt="Vehicle"
          width={292}
          height={320}
        />
      </div>
      <div className={css.rightWrapper}>
        <div>
          <div className={css.headerWrapper}>
            <h2 className={css.name}>{camper.name}</h2>
            <p className={css.price}>€{camper.price}</p>
          </div>
          <div className={css.reviewsWrapper}>
            <p>4.4(2 Reviews)</p>
            <p>Kyiv, Ukraine</p>
          </div>
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
