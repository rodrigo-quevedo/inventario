import './CargarVenta.module.css'

import { MENUS } from '../../App'

export default function CargarVenta ({setMenu}) {

    return (
        <div>
            <section>
                <h1>Ingresar una venta</h1>
                <button onClick={()=>setMenu(MENUS[0])}>CANCELAR</button>
            </section>
              
        </div>
    )

    
}