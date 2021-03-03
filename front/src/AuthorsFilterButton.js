import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { appConfig } from './config'

const AuthorsButton = ({ setFilterValue, setFilterOption }) => {
  return (
    <DropdownButton
      as={ButtonGroup}
      id='dropdown-variants-Secondary'
      variant='secondary'
      title='autor'
    >
      {appConfig.authors.map((authorData, i) => {
        return (
          <Dropdown.Item
            key={i}
            eventKey={i + 1}
            onClick={() => {
              setFilterOption('author');
              setFilterValue(authorData.stringForUrl);
            }}
          >
            {authorData.title}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};
export default AuthorsButton;
