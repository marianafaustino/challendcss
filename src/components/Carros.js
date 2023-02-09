import styles from "./Carros.module.css"
import React from 'react'

const Carros = () => {
    const carros = [
        {id: 1, brand: "Jeep", model: "Renegade", km: 10500, value: 95000},
        {id: 2, brand: "Renault", model: "Duster", km: 102000, value: 42000},
        {id: 3, brand: "VW", model: "Voyage", km: 59600, value: 22500}
    ]
  return (
    <div className={styles.geral}>
        {carros.map((carro)=>(
         <div key={carro.id} className={styles.cardetails}>
            <h2>{carro.brand}-{carro.model}</h2>
            <p className={styles.car_p}>{carro.km}km</p>
            <p className={styles.car_p}>R${carro.value},00</p>
         </div>

        )

        )}
    </div>
  )
}

export default Carros