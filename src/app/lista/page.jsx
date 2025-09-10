'use client' ;

import { useState} from "react";

// Crear una lista basica con map ()

export default function Page() {
    const [tareas , setTareas] =  useState(["Estudiar React", "Hacer ejercicio", "Leer un libro"]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const agregarTarea = () => {
        if (nuevaTarea.trim() === "") return ;
        setTareas([...tareas,nuevaTarea]);
        setNuevaTarea("");
    };

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((_,i)  => i !== index));

    };

    return (
    <div style={{ textAlign: 'center', marginTop: '30px'}}>
      <h1>Lista de tareas</h1>

      {/* 🔹 Input + botón para agregar */}
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map((tarea, index) => (
          <li 
            key={index}
            style={{
              margin: '10px',
              padding: '10px',
              border: '1px solid gray',
              borderRadius: '8px'
            }}
          >
            {tarea} 
            {/* 🔹 Botón para eliminar */}
            <button 
                style={{ marginLeft: "10px", color: "red" }} 
                onClick={() => eliminarTarea(index)}
            >
            ❌
            </button>
        </li>
        ))}
        </ul>
    </div>
    );


}