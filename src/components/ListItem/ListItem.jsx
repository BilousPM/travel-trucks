import GridItem from '../GridItem/GridItem.jsx';
import css from './ListItem.module.css';

const ListItem = ({ label }) => {
  console.log(label);
  return (
    <GridItem>
      <div className={css.item}>
        <p>{label}</p>
      </div>
    </GridItem>
  );
};

export default ListItem;
