'use client' ;
import { useState } from 'react';
import Boton from '../Components/Boton';


export default function Home(){
  const [ mensaje , setMensaje] = useState('');

  //Una funcion para manejar el botón

  const  manejarClick = (textoBoton: string) => {
    setMensaje(`cliquiaste el botón: ${textoBoton}`);
  
  //Condicional para mostar un mensaje de alerta
  if (textoBoton === 'aceptar') {
    console.log('Boton Aceptar presionado');
    alert('¡Gracias por cancelar!');
  }else if (textoBoton === 'Cancelar'){
    console.log('Boton Cancelar precionado')
    alert('¡Gracias por Cancelar!');
  }

  };



  return (
    <main style={{ textAlign: 'center', padding: '20px'}}>
    <h1>Página principal</h1>
    {mensaje && <p style={{color: 'green', fontSize: '18px'}}>{mensaje}</p>}
    <Boton texto="Aceptar" onClick={manejarClick}/>
    <Boton texto="Cancelar" onClick={manejarClick}/>
    </main>
  )

}
  












// import { useState } from 'react';
// import Saluda from '../Components/firts'

// export default function Home() {
  // const [contador, setContador] = useState(0);

  //variables para el contador 
  // const incrementar = () => setContador (contador +1);
  // const decrementar = () => setContador (contador -1);
  // const resetear = () => setContador(0);
//arreglar el contador para que no disminuya y poner estilos
  // return (
    // <main style={{textAlign: 'center', padding: '50px'}}>
      // <h1>Contador Dinamico</h1>
      // <h2>{contador}</h2>

      // {/*botones*/}
    // <button onClick={incrementar}>Aumentar</button> {''}
    // <button onClick={decrementar}>Disminuir</button>{''}
    // <button onClick={resetear}>Reiniciar</button>
    // </main>
  // )
// }