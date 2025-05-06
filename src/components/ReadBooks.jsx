import { useBooksContext } from "../context/BooksContext";

export default function ReadBooks() {
  const { books } = useBooksContext();
  const readBooks = books.filter(b => b.read);

  return (
    <div>
      <h2>Libros leídos</h2>
      {readBooks.map(book => (
        <div key={book.id}>{book.title} - {book.author}</div>
      ))}
    </div>
  );
}
