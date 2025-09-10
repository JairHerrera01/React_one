


export default function Productos() {
  // Definimos los productos estáticos
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1500 },
    { id: 2, nombre: "Celular", precio: 800 },
    { id: 3, nombre: "Audífonos", precio: 120 },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Lista de productos (estáticos)</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {productos.map((p) => (
          <li
            key={p.id}
            style={{
              margin: '10px',
              padding: '10px',
              border: '1px solid gray',
              borderRadius: '8px'
            }}
          >
            {p.nombre} - ${p.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}
