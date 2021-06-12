import { useContext } from 'react';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { AuthorsDataContext } from './Main';

const AuthorsFilterButton = ({ setFilterValue, setFilterOption }) => {
  const authorsData = useContext(AuthorsDataContext);
  const authors = authorsData?.map(author => ({
    stringForUrl: author.surname,
    title: `${author.surname} ${author.name}`,
  }));
  return (
    <DropdownButton
      as={ButtonGroup}
      id='dropdown-variants-Secondary'
      variant='secondary'
      title='autor'
    >
      <Dropdown.Item
        onClick={() => {
          setFilterOption('author');
          setFilterValue('');
        }}
      >
        wszyscy
      </Dropdown.Item>
      {authors?.map((authorData, i) => {
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
export default AuthorsFilterButton;
