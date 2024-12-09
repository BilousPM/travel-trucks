import GridItem from '../GridItem/GridItem.jsx';
import css from './EquipmentListItem.module.css';

const EquipmentListItem = ({ label }) => {
  return (
    <GridItem>
      <div className={css.item}>
        <p>{label}</p>
      </div>
    </GridItem>
  );
};

export default EquipmentListItem;
