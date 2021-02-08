import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faThLarge } from '@fortawesome/free-solid-svg-icons';

const RadioButton = ({ setViewMode }) => {
  const radios = [
    { title: <FontAwesomeIcon icon={faThLarge} />, option: 'tiles' },
    { title: <FontAwesomeIcon icon={faThList} />, option: 'list' },
  ];

  return (
    <div className='btn-group mt-3' role='group' aria-label='Second group'>
      {radios.map(radio => (
        <button
          onClick={() => setViewMode(radio.option)}
          type='button'
          className='btn btn-secondary'
          key={radio.option}
        >
          {radio.title}
        </button>
      ))}
    </div>
  );
};

export default RadioButton;
