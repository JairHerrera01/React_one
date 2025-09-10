
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




<!-- 
Next.js

Es un framework basado en React que permite crear aplicaciones web modernas.

Trae configuración lista para arrancar (npm run dev).

Usa optimización de fuentes, rutas automáticas y puede desplegarse fácilmente en Vercel.

🔹 Componentes en React

Son las piezas fundamentales de una app en React.

Funcionan como bloques reutilizables.

Tipos:

Funcionales:

Declarados con funciones JS.

Usan hooks como useState o useEffect.

Son los más usados hoy en día.

De clase:

Usan class y this.state.

Cada vez se usan menos.

Conceptos clave:

Props: datos que un componente recibe del padre (no cambian).

State: datos internos que sí cambian con el tiempo.

🔹 JSX

Es una mezcla de HTML + JavaScript.

Permite escribir interfaces más declarativas.

Características:

Se parece a HTML.

Permite usar {} para meter expresiones JS.

Usa atributos en camelCase (className, onClick).

Siempre debe haber un solo elemento raíz.

🔹 Vite + React

Es una alternativa ligera a Webpack.

Ventajas: velocidad, configuración mínima, y HMR (cambios en tiempo real).

Pasos básicos:

npm create vite@latest mi-app --template react
cd mi-app
npm install
npm run dev

🔹 Estado en React

Representa datos dinámicos de un componente.

Si cambia el estado → se renderiza de nuevo la UI.

Características:

Local (cada componente maneja su propio estado).

Mutable (se cambia con useState o setState).

Al actualizarse → refresca la vista.

⚠️ Importante: nunca modificar el estado directamente.

🔹 Eventos en React

Permiten responder a interacciones del usuario (clics, inputs, etc.).

Características:

Usan camelCase (onClick, onChange).

Se pasan funciones como manejadores.

React simula el DOM para mejorar rendimiento.

👉 Patrón común: eventos modifican el estado → la UI se actualiza automáticamente.

🔹 Código de ejemplo resumido

📌 Home.jsx

Usa un estado mensaje.

Maneja clicks en botones "Aceptar" y "Cancelar".

Muestra alertas según el botón presionado.

📌 Boton.jsx

Recibe texto y función onClick.

Renderiza un botón estilizado con Tailwind.

--------------------------------------------------------


1. Componente Boton:
   - Función principal: Boton({ texto, onClick })
   - Función interna: handleClick()
       -> Imprime en consola el texto del botón.
       -> Llama a la función onClick pasando el texto.
   - Retorna un botón estilizado con Tailwind que ejecuta handleClick al presionarlo.

2. Componente Saludo:
   - Función principal: saludo()
   - Define una constante "numero = 1".
   - Retorna un <h1> con el texto "Hola mundo" y el número concatenado.

3. Componente VistaNueva (contador):
   - Función principal: VistaNueva()
   - Usa el hook useState para definir [valor, setValor].
   - Retorna un <div> con:
       -> <h2> que muestra el valor actual.
       -> Botón "Aumentar": ejecuta setValor(valor + 1).
       -> Botón "Disminuir": ejecuta setValor(valor - 1).

4. Componente Mensaje:
   - Función principal: Mensaje()
   - Usa useState para manejar el estado [nombre, setNombre].
   - Usa useEffect:
    -> Se ejecuta cada vez que cambia "nombre".
    > Imprime en consola el valor actual de nombre.
   - Retorna un <div> con:
    -> Input controlado para escribir el nombre.
    -> Párrafo que muestra "Hola {nombre}" o "Hola invitado" si está vacío.

 -->


 # Renderizado 

 ## Renderizado 
 --> Terminarios
 -> if - else
 ---> condicion  ? "si es verdadero" : "si es falso"


 {
   productos.length > 0
   ? <p> Hay productos disponibles</p>
   : <p> No hay productos
 }