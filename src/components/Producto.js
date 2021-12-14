
const Producto = ({producto, productos, agregarProducto, carrito}) => {
    
    const {nombre, precio, id} = producto;

    // Seleccionar un producto

    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);

    }

    // Eliminar producto del carrito

    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto => producto.id !== id);
    
        // Eliminando el producto
        agregarProducto(productos)
    
    }

    return ( 
        <div>
            <h2> {nombre} </h2>
            <p> ${precio} </p>
            {productos
            ?
                <button 
                type="button"
                onClick = { () => seleccionarProducto(id)}> 
                
                Agregar al Carrito      
                </button>
            :
            <button 
                type="button"
                onClick = { () => eliminarProducto(id)}> 
                
                Eliminar  
            </button>}
        </div>
    )
}
 
export default Producto;