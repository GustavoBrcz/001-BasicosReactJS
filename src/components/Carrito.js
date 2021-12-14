import "./Carrito.css";
import Producto from "./Producto";

const Carrito = ({carrito, agregarProducto}) => {
    
    return(
        <div className="carrito">
            <h2>Tu Carrito</h2>
            
            {carrito.length === 0
            ?
                <p>Tu carrito está vacío</p>
            : carrito.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                />

            ))}
            
        </div>
    )
};
 
export default Carrito;