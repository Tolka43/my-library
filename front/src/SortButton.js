import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { appConfig } from './config';

const SortButton = ({ setSortValue, setSortOption }) => {
  return (
    <DropdownButton
      as={ButtonGroup}
      id='dropdown-variants-Secondary'
      variant='secondary'
      title='sortuj'
    >
      {appConfig.sortOptions.map((sort, i) => (
        <Dropdown.Item
          key={i}
          eventKey={i + 1}
          onClick={() => {
            setSortValue(sort.sortValue);
            setSortOption(sort.sortOption);
          }}
        >
          {sort.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
export default SortButton;
