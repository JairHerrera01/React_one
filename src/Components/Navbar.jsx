'use client';
import Link from "next/link";

export default function Navbar() {
    return(
    <nav style= {{backgroundColor: '#282c34',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    }}>
    
    <Link href="/">Inicio</Link> |{" "}
    <Link href="/lista">Lista de Tareas</Link> |{" "}
    <Link href="/productostatic">Productos Estáticos</Link> |{" "}
    <Link href="/productos">Productos desde API</Link>
    </nav>

);
}
