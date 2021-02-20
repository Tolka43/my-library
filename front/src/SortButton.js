import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { getBooks } from './helpers';
import { BooksContext } from './App';
import { useContext } from 'react';

const SortButton = ({ title, page, pageSize, setFilter, setFilteredValue }) => {
  const { setBooks } = useContext(BooksContext);

  const sortOptions = [
    { stringForUrl: '', title: 'wszyscy' },
    { stringForUrl: 'autorzy-az', title: 'autorzy A-Z' },
    { stringForUrl: 'autorzy-za', title: 'autorzy Z-A' },
  ];

  return (
    <DropdownButton
      className='mt-3 ml-2'
      as={ButtonGroup}
      id='dropdown-variants-Secondary'
      variant='secondary'
      title='sortuj'
    >
      {sortOptions.map((sortOption, i) => {
        return (
          <Dropdown.Item key={i} eventKey={i + 1} onClick={() => {}}>
            {sortOption.title}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};
export default SortButton;
