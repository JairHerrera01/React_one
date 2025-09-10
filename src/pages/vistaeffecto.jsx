/*

usseEffect (() => {
    --accion qu quiero ejecutar
    },[dependencia]) --array de dependencia


*/

// Genera una vista al ejecutar un efecto secundario me muestra el contenido en consola

'use cliente';
import {useState , useEffect} from 'react';

export default function Mensaje (){
    const [nombre , setNombre] = useState("");

    //useEffect
    useEffect(()  =>{
        console.log("El nombre es:", nombre);

    }, [nombre]);

return (
    <div style={{textAlign: 'center'}}>
        <input 
        type="text" 
        placeholder="Escriba tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}/>

        <p>Hola {nombre || "invitado"} </p>
    </div>
    );

}