import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { appConfig } from './config';

const GenreButton = ({ setFilterValue, setFilterOption }) => {
  return (
    <DropdownButton
      as={ButtonGroup}
      id={`dropdown-variants-Secondary`}
      variant='secondary'
      title='gatunek'
    >
      {appConfig.genres.map((genreData, i) => (
        <Dropdown.Item
          key={i}
          eventKey={i + 1}
          onClick={() => {
            setFilterOption('genre');
            setFilterValue(genreData.stringForUrl);
          }}
        >
          {genreData.title}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
export default GenreButton;
