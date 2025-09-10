import Navbar from "@/Components/Navbar";
import './globals.css';
import { ReactNode} from "react"

// CREAR EL ARCHIVO CON ESTILOS PREDETERMINADOS PARA EL PROYECTO


export const metadata = {
  title: 'clase de listas y renderizado',
  description: 'Aprendiendo React con Next.js',

};

// Opcon 1: Tipar el children
interface RootLayoutProps {
  children: ReactNode;
  

  /*
  funcion sin tipar
  fuction suma  (a,b){
  return a+b
}

-> fucion tipado
fuction suma (a: number , b: number): number {
}
  Componentes padre -> props tipados -> components
  -> los promps: son basicamente son la apropiacion 
  */


  /*
  
  */
}
export default function RootLayout({children}: RootLayoutProps){
  return(
    <html lang="en">
    <body>
      <Navbar/>
        {children}
    </body>
    </html>
  )
}