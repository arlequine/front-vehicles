"use client"; // This is a client component 👈🏽
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table,  } from 'react-bootstrap';
import useAxios from "@/hooks/useAxios";
import 'leaflet/dist/leaflet.css'
import { ChangeEvent, useContext, useEffect, useState } from "react";
import MapView from "@/components/MapView/MapView";
import axios, { AxiosResponse } from "axios";
import { VehiclesContext } from '@/context/VehiclesContext'
import { Vehicle, VehicleRoute } from "@/types";
import { useRouter } from "next/navigation";

export default function Home() {

  let { vehicles, getVehicleFilter, deleteVehicle } = useContext(VehiclesContext)
  
  const [geoRoute, setGeoRoutes] = useState<[VehicleRoute]>()
  const router = useRouter()
  
  const handleClick = async () => {
    const url = `http://localhost:3001/api/v1/georoute`
    const results = await axios.get(url)
    console.log(results.data)
    setGeoRoutes(results.data)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    getVehicleFilter(e.target.value)
  }

  const handleDelete = async (id: string) => {
    deleteVehicle(id)
    await getVehicleFilter('')
  }

  useEffect(() => {
    getVehicleFilter()
  }, [])
  

  return (
    <main className={styles.main}>
      <section className={styles.description}>
      
        <div>
          <p>
            By ArlequinDev
          </p>
        </div>
        <div>
          <Button type="button" variant="outlined" onClick={() => router.push('/vehicle')}>
            Nuevo vehiculo
          </Button>
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
        <Form.Control
          type="text"
          placeholder="Busqueda por marca"
          aria-label="filter vehicles"
          onChange={(e) => handleChange(e)}
        />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año</th>
              <th>color</th>
              <th>placa</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              vehicles && vehicles.map((vehicle, i: number) => ((
                <tr key={i} onClick={() => handleClick()}>
                  <td>1</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.year}</td>
                  <td>{vehicle.color}</td>
                  <td>{vehicle.plate}</td>
                  <td><Button type="button" variant="danger" onClick={() => handleDelete(vehicle._id)} >X</Button></td>
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
