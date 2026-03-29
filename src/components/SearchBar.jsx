//should look at book table and add a general search bar to filter the books by name, author, genre, or description.



export function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="bookSearch"></label>
      <input
        id="bookSearch"
        type="search"
        placeholder="Search by any field..."
        value={query}
        onChange={e => onQueryChange(e.target.value)}
      />
    </div>
  );
}
