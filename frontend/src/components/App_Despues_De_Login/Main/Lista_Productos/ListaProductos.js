import {useState} from 'react'

import styles from './ListaProductos.module.css'

import {MENUS} from '../../App_Despues_De_Login'

export default function ListaProductos ({setMenu, setWebpageTitle}) {
    // const [productos, setProductos] = useState([])
    // const [cargarLista, setCargarLista] = useState(true)

    // const URL_EXPRESS_APP = process.env.REACT_APP_URL_EXPRESS_APP 
    // const URL_LISTA_PRODUCTOS = URL_EXPRESS_APP + '/productos'

    setWebpageTitle('Lista de productos')

    return (
        <div>
            <section>
                <h1>Lista de productos</h1>
                <button className={styles.menuButton}
                onClick={()=>setMenu(MENUS[1])}>Ingresar nuevos productos</button>
                <button className={styles.menuButton}
                onClick={()=>setMenu(MENUS[2])}>Ingresar venta</button>
            </section>
        </div>
        
    )
}
