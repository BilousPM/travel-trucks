import css from './VehicleEqpt.module.css';

const VehicleEqpt = () => {
  return (
    <div>
      <h2 className={css.title}>Vehicle equipment</h2>
      <ul>
        <li className={css.item}>
          <p>AC</p>
        </li>
        <li className={css.item}>
          <p>Automatic</p>
        </li>
      </ul>
    </div>
  );
};

export default VehicleEqpt;
