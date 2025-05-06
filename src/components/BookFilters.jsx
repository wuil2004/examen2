import { useState } from "react";

export default function BookFilters({ filters, setFilters }) {
  const [selectedField, setSelectedField] = useState("title");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      title: selectedField === "title" ? value : "",
      author: selectedField === "author" ? value : "",
      genre: selectedField === "genre" ? value : "",
    }));
  };

  return (
    <div>
      <select value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
        <option value="title">Título</option>
        <option value="author">Autor</option>
        <option value="genre">Género</option>
      </select>

      <input
        placeholder={`Buscar por ${selectedField}`}
        value={filters[selectedField]}
        onChange={handleInputChange}
      />
    </div>
  );
}
