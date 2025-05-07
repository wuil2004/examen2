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
                <div key={book.id} className={`book-card ${book.read ? "read" : ""}`}>
                    <strong>{book.title}</strong> - {book.author} ({book.year}) [{book.genre}]
                    <div>
                        <button onClick={() => toggleRead(book.id)} className="secondary">
                            {book.read ? "Marcar como no leído" : "Marcar como leído"}
                        </button>
                        <button onClick={() => onEdit(book)} className="primary">Editar</button>
                        <button onClick={() => deleteBook(book.id)} className="secondary">Eliminar</button>
                    </div>
                </div>
            ))}

        </div>
    );
}
