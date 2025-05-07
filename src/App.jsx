import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import ReadBooks from "./components/ReadBooks";
import BookFilters from "./components/BookFilters";
import { useBooksContext } from "./context/BooksContext";

function App() {
  const [filters, setFilters] = useState({ title: "", author: "", genre: "" });
  const [showForm, setShowForm] = useState(false);
  const [editableBook, setEditableBook] = useState(null);

  const { addBook, editBook } = useBooksContext();

  const handleAdd = () => {
    setEditableBook(null);
    setShowForm(true);
  };

  const handleEdit = (book) => {
    setEditableBook(book);
    setShowForm(true);
  };

  const handleSave = (bookData) => {
    if (editableBook && bookData.id) {
      editBook(bookData);
    } else {
      addBook(bookData);
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Gestor de Libros</h1>
      <button onClick={handleAdd} className="primary mb-4">
        Agregar nuevo libro
      </button>
      <BookFilters filters={filters} setFilters={setFilters} />
      <BookList filters={filters} onEdit={handleEdit} />
      <ReadBooks />
      {showForm && (
        <BookForm
          editableBook={editableBook}
          onSave={handleSave}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
  
}

export default App;
