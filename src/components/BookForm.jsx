import { useState, useEffect } from "react";

export default function BookForm({ editableBook, onSave, onClose }) {
  const [form, setForm] = useState({ title: "", author: "", genre: "", year: "" });

  useEffect(() => {
    if (editableBook) {
      setForm(editableBook);
    }
  }, [editableBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => v.trim() === "")) return;
    onSave(form);  // Puede ser addBook o editBook según el flujo
    setForm({ title: "", author: "", genre: "", year: "" });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <h2>{editableBook ? "Editar libro" : "Agregar libro"}</h2>
        <input placeholder="Título" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Autor" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
        <input placeholder="Género" value={form.genre} onChange={e => setForm({ ...form, genre: e.target.value })} />
        <input placeholder="Año" value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} />
        <button type="submit">{editableBook ? "Guardar cambios" : "Agregar libro"}</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
}
