import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import ReadBooks from "./components/ReadBooks";
import BookFilters from "./components/BookFilters";

function App() {
  const [filters, setFilters] = useState({ title: "", author: "", genre: "" });

  return (
    <div>
      <h1>Gestor de Libros</h1>
      <BookForm />
      <BookFilters filters={filters} setFilters={setFilters} />
      <BookList filters={filters} />
      <ReadBooks />
    </div>
  );
}

export default App;
