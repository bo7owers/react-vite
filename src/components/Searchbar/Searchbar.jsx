import "./searchbar.css";

export default function SearchBar(props) {
  return (
    <section className="search-bar">
      <h2>Search for something interesting</h2>
      <form>
        <input type="text" name="custom-search" className="search-text" />
        <button className="btn-primary btn" name="search-btn">
          Search
        </button>
      </form>
    </section>
  );
}
