import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

const RadioButton = () => {
  const radios = [
    { title: <FontAwesomeIcon icon={faThLarge} />, id: 1 },
    { title: <FontAwesomeIcon icon={faThList} />, id: 2 },
  ];

  return (
    <div className="btn-group me-2" role="group" aria-label="Second group">
      {radios.map((radio, i) => {
        return (
          <button type="button" className="btn btn-secondary" key={i}>
            {radio.title}
          </button>
        );
      })}
    </div>
  );
};

export default RadioButton;
