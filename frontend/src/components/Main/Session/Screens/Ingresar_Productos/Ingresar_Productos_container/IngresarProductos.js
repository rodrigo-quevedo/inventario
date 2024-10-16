import {useState} from 'react'

import styles from './IngresarProductos.module.css'

function IngresarProductos () {
    document.querySelector('title').innerText = 'Ingresar producto';
    
    const [precioUnitario, setPrecioUnitario] = useState(true)


    return (
        <section className={styles.flexContainer}>
            <div className={styles.container}>
                <h1>Nuevo producto</h1>

                <form id="formularioCompra" className={styles.formulario}>
                    <div>
                        <label for="nombreProducto">Nombre del producto</label>
                        <input type="text" id="nombreProducto" placeholder="Producto"/>
                    </div>

                    <div>
                        <label for="cantidadProducto">Cantidad</label>
                        <input type="number" id="cantidadProducto" placeholder="0"/>
                    </div>


                    <div>
                        <label for="marcaProducto">Marca</label>
                        <input type="text" id="marcaProducto" placeholder="Marca"/>
                    </div>

                    <div className={styles.eleccionPrecio}>
                        <label 
                        for="precioUnitario"  
                        onClick={()=>setPrecioUnitario(true)}
                        className={precioUnitario ? styles.precioElegido : styles.precioInactivo}
                        >Precio unitario</label>
                        <label 
                        for="precioTotal" 
                        onClick={()=>setPrecioUnitario(false)}
                        className={ ! precioUnitario ? styles.precioElegido : styles.precioInactivo}
                        >Precio total</label>
                    </div>

                    {precioUnitario ?
                        <div className={styles.eleccionPrecioInput}>
                            <input type="number" id="precioUnitario" placeholder="$ 0"/>
                        </div>
                    :
                        <div className={styles.eleccionPrecioInput}>
                            <input type="number" id="precioTotal" placeholder="$ 0"/>
                        </div>
                    }

                    <div>
                        <label for="proveedor">Proveedor</label>
                        <input id="proveedor" />
                    </div>

                    <div>
                        <input type="submit" value="Enviar"/>
                    </div>

                </form>

            </div>
        </section>
    )


}


export default IngresarProductos