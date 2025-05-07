import { useBooksContext } from "../context/BooksContext";

export default function ReadBooks() {
  const { books } = useBooksContext();
  const readBooks = books.filter(b => b.read);

  return (
    <div>
      <h2>Libros leídos</h2>
      {readBooks.length === 0 ? (
        <p>No hay libros leídos aún.</p>
      ) : (
        readBooks.map(book => (
          <div key={book.id} className="book-card read">
            <strong>{book.title}</strong> - {book.author} ({book.year}) [{book.genre}]
          </div>
        ))
      )}
    </div>
  );
}
