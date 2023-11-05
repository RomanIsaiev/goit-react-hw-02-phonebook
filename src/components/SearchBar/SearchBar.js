import { nanoid } from 'nanoid';

export const SearchBar = ({ filter, onUpdateName }) => {
  const filterInput = nanoid();
  return (
    <div>
      <label htmlFor={filterInput}>
        Find contacts by name
        <input
          type="text"
          id={filterInput}
          value={filter}
          onChange={event => onUpdateName(event.target.value)}
        ></input>
      </label>
    </div>
  );
};
