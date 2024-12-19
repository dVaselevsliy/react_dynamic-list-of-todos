import { SORT_FIELD } from '../../App';

export const TodoFilter = ({ query, setQuery, sortField, setSortField }) => {
  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            value={sortField}
            onChange={event => setSortField(event.target.value)}
            data-cy="statusSelect"
          >
            <option value={'all'}>All</option>
            <option value={SORT_FIELD.COMPLEATED_FALSE}>Active</option>
            <option value={SORT_FIELD.COMPLEATED_TRUE}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          value={query}
          onChange={event => setQuery(event.currentTarget.value)}
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {query !== '' && (
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => {
                setQuery('');
              }}
            />
          )}
        </span>
      </p>
    </form>
  );
};
