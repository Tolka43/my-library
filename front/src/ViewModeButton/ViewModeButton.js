import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import './ViewModeButton.css'

const ViewModeButton = ({ setViewMode }) => {
  const radios = [
    { title: <FontAwesomeIcon icon={faThLarge} />, option: 'tiles' },
    { title: <FontAwesomeIcon icon={faThList} />, option: 'list' },
  ];

  return (
    <>
    <div className='btn-group view-mode-button' role='group' aria-label='Second group'>
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
    
    </>
  );
};

export default ViewModeButton;
