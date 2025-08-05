// components/SearchBar.js
export default function SearchBar({ search, setSearch }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Wpisz nick..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
