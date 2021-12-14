import React, {Fragment, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
import Pagar from "./components/Pagar";



function App() {

  // Crear listado de productos 

  const [productos] = useState([
    {id: 1, nombre: "Iphone 13 Pro Max", precio: 1200},
    {id: 2, nombre: "Apple Watch Series 7", precio: 450},
    {id: 3, nombre: "Playstation 5", precio: 600},
    {id: 4, nombre: "Nintendo Switch Oled", precio: 400},
  ]);

  // Extraer el precio de un arreglo

  const total = 0;

  const totalAPagar = () => {
    productos.precio.map(+ total)
  }
  
  




  // State para un carrito de compras 
  const [carrito, agregarProducto ] = useState([]); 

  // Obtener la fecha actual 
  const fecha = new Date().getFullYear();

  return (
    <Fragment> 
      <Header 
        titulo = "Tienda Virtual"
      /> 

      <h1>Lista de Productos</h1>
      {productos.map( producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Pagar
        key={productos.precio} 
        agregarProducto={agregarProducto}
        totalAPagar={totalAPagar}
      />

      <Footer 
        fecha = {fecha}
      /> 
    </Fragment>
  );
}


export default App;
