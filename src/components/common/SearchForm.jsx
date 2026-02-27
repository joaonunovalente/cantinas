import { useState } from "react";
import { useNavigate } from "react-router-dom";
import maisInformacoes from "../../data/maisInformacoes";

const normalizeText = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

function SearchForm({ value, onValueChange }) {
  const [internalValue, setInternalValue] = useState("");
  const navigate = useNavigate();

  const isControlled = typeof value === "string";
  const searchValue = isControlled ? value : internalValue;

  const handleChange = (event) => {
    const nextValue = event.target.value;

    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedQuery = normalizeText(searchValue);

    if (!normalizedQuery) {
      return;
    }

    const match = maisInformacoes.find((item) => {
      const normalizedTitle = normalizeText(item.title);

      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedQuery.includes(normalizedTitle)
      );
    });

    if (match) {
      navigate(match.href);
    }
  };

  return (
    <form className="search-form w-100" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Procurar por artigo..."
        name="search"
        className="form-control search-input"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit" className="btn search-btn" value="Search" aria-label="Search">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}

export default SearchForm;