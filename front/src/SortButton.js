import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { getBooks } from './helpers';

const SortButton = ({ title, page, pageSize }) => {
  return (
    <DropdownButton
      className='mt-3'
      as={ButtonGroup}
      id={`dropdown-variants-Secondary`}
      variant={'Secondary'.toLowerCase()}
      title={title}
    >
      <Dropdown.Item eventKey='1' value='wszyscy'>
        wszyscy
      </Dropdown.Item>
      <Dropdown.Item onClick={() => getBooks(page, pageSize, 'Sapkowski+Andrzej')} eventKey='2' value='Sapkowski Andrzej'>
        Sapkowski Andrzej
      </Dropdown.Item>
      <Dropdown.Item eventKey='3' value='Rowling J.K.'>
        Rowling J.K.
      </Dropdown.Item>
    </DropdownButton>
  );
};
export default SortButton;
