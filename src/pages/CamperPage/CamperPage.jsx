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
      ;
    </section>
  );
};

export default CamperPage;
