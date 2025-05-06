import { useState } from "react";
import { useBooksContext } from "../context/BooksContext";

export default function BookForm() {
  const { addBook } = useBooksContext();
  const [form, setForm] = useState({ title: "", author: "", genre: "", year: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some(v => v.trim() === "")) return;
    addBook(form);
    setForm({ title: "", author: "", genre: "", year: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Título" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Autor" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
      <input placeholder="Género" value={form.genre} onChange={e => setForm({ ...form, genre: e.target.value })} />
      <input placeholder="Año" value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} />
      <button type="submit">Agregar libro</button>
    </form>
  );
}
