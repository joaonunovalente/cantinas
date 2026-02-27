function SearchForm() {
  return (
    <form className="search-form w-100" onSubmit={(event) => event.preventDefault()}>
      <input type="text" placeholder="Procurar por artigo..." name="search" className="form-control search-input" />
      <button type="submit" className="btn search-btn" value="Search" aria-label="Search">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}

export default SearchForm;
