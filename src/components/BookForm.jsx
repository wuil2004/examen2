import { useState, useEffect } from "react";

export default function BookForm({ editableBook, onSave, onClose }) {
  const [form, setForm] = useState({ title: "", author: "", genre: "", year: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (editableBook) {
      setForm({ ...editableBook }); 
    }
  }, [editableBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => String(v).trim() === "")) return;


    onSave(form);  
    setMessage(editableBook ? "Cambios guardados" : "Libro agregado");

    setTimeout(() => {
      setMessage("");
      setForm({ title: "", author: "", genre: "", year: "" });
      onClose();
    }, 1500); 
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow w-80 flex flex-col gap-2">
        <h2 className="text-xl font-semibold mb-2">{editableBook ? "Editar libro" : "Agregar libro"}</h2>

        <input placeholder="Título" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Autor" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
        <input placeholder="Género" value={form.genre} onChange={e => setForm({ ...form, genre: e.target.value })} />
        <input placeholder="Año" value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} />

        <div className="flex gap-2 mt-2">
          <button type="submit" className="primary">
            {editableBook ? "Guardar cambios" : "Agregar libro"}
          </button>
          <button type="button" className="secondary" onClick={onClose}>
            Cancelar
          </button>
        </div>

        {message && <p className="text-green-600 mt-2">{message}</p>}
      </form>
    </div>
  );
}
