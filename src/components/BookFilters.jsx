export default function BookFilters({ filters, setFilters }) {
    return (
      <div>
        <input placeholder="Buscar por título" onChange={e => setFilters(f => ({ ...f, title: e.target.value }))} />
        <input placeholder="Buscar por autor" onChange={e => setFilters(f => ({ ...f, author: e.target.value }))} />
        <input placeholder="Buscar por género" onChange={e => setFilters(f => ({ ...f, genre: e.target.value }))} />
      </div>
    );
  }
  