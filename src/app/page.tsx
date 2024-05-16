"use client"; // This is a client component 👈🏽
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Table,  } from 'react-bootstrap';

export default function Home() {
  
  const [listVehicles, setListVehicles] = useState([])

  const getVehicles = async () => {
    const url = `http://localhost:3001/api/v1/vehicles`
    const results = await axios.get(url)
    console.log(results.data)
    setListVehicles(results.data)
  }

  const handleClick = () => {
   console.log('click')  
  }

  useEffect(() => {
    getVehicles()
  }, [])
  

  return (
    <main className={styles.main}>
      <section className={styles.description}>
      
        <div>
          <p>
            By ArlequinDev
          </p>
        </div>
      </section>

      <section>
        <h2>
          Mapa
        </h2>

      </section>

      <section className={styles.center}>
        <h3>
          Lista de vehiculos
        </h3>
        <div className={styles.vehiclesList} >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año</th>
              <th>color</th>
              <th>placa</th>
            </tr>
          </thead>
          <tbody>
            {
              listVehicles.map((vehicle, i) => ((
                <tr key={i} onClick={() => handleClick()}>
                  <td>1</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.year}</td>
                  <td>{vehicle.color}</td>
                  <td>{vehicle.plate}</td>
                </tr>
              )))
            }
          </tbody>
        </Table>
        </div>
      </section>
    </main>
  );
}
