import { useBooksContext } from "../context/BooksContext";


export default function BookList({ filters, onEdit }) {
    const { books, deleteBook, toggleRead } = useBooksContext();
  
    const filtered = books.filter(book =>
      (!filters.title || book.title.includes(filters.title)) &&
      (!filters.author || book.author.includes(filters.author)) &&
      (!filters.genre || book.genre.includes(filters.genre))
    );
  
    return (
      <div>
        <h2>Libros registrados</h2>
        {filtered.map(book => (
          <div key={book.id}>
            <strong>{book.title}</strong> - {book.author} ({book.year}) [{book.genre}]
            <button onClick={() => toggleRead(book.id)}>{book.read ? "Marcar como no leído" : "Marcar como leído"}</button>
            <button onClick={() => onEdit(book)}>Editar</button>
            <button onClick={() => deleteBook(book.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    );
  }
  