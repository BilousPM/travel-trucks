import PrimaryButton from '../PrimaryButton/PrimaryButton.jsx';
import css from './CamperCard.module.css';

const CamperCard = () => {
  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img width={292} height={320} />
      </div>
      <div>
        <h2>Mavericks</h2>
        <p>€8000.00</p>
        <p>4.4(2 Reviews)</p>
        <p>Kyiv, Ukraine</p>
        <p>Embrace simplicity and freedom with the Mavericks panel truck...</p>
        <PrimaryButton label="Show more" />
      </div>
    </div>
  );
};

export default CamperCard;
