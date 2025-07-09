export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search for a coin..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '0.5rem',
        width: '100%',
        marginBottom: '1rem',
        fontSize: '1rem'
      }}
    />
  );
}
