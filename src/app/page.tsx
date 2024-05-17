"use client"; // This is a client component 👈🏽
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,  } from 'react-bootstrap';
import useAxios from "@/hooks/useAxios";
import 'leaflet/dist/leaflet.css'

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useEffect, useState } from "react";
import MapView from "@/components/MapView/MapView";
import axios, { AxiosResponse } from "axios";
import { VehicleRoute } from "@/types";

export default function Home() {
  
  const listVehicles = useAxios('vehicles')
  const [geoRoute, setGeoRoutes] = useState<[VehicleRoute]>()
  


  const handleClick = async () => {
    const url = `http://localhost:3001/api/v1/georoute`
    const results = await axios.get(url)
    console.log(results.data)
    setGeoRoutes(results.data)
  }

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
        {
          geoRoute && <MapView geojsonData={geoRoute[0]} />
        }

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
