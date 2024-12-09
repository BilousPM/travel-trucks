import css from './FeaturesList.module.css';

const features = [
  'Automatic',
  'Petrol',
  'Automatic',
  'Kitchen',
  'Petrol',
  'Automatic',
];

const FeaturesList = () => {
  return (
    <ul className={css.featuresWrapper}>
      {features.map((label, index) => (
        <li key={index} className={css.feature}>
          {label}
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
