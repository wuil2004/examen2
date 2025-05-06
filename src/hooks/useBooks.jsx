import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => setBooks([...books, { ...book, id: crypto.randomUUID(), read: false }]);
  const deleteBook = (id) => setBooks(books.filter(b => b.id !== id));
  const editBook = (updated) =>
    setBooks(books.map(b => (b.id === updated.id ? { ...b, ...updated } : b)));
  const toggleRead = (id) =>
    setBooks(books.map(b => (b.id === id ? { ...b, read: !b.read } : b)));

  return { books, addBook, deleteBook, editBook, toggleRead };
};

export default useBooks;
