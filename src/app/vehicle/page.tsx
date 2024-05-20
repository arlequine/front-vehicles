"use client"; // This is a client component 👈🏽

import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import styles from './page.module.css'
import { VehiclesContext } from '@/context/VehiclesContext'
import { redirect, useRouter } from 'next/navigation'

const New = () => {

  let { postNewVehicle } = useContext(VehiclesContext)
  const [vehicleBody, setVehicleBody] = useState<unknown>()
  const router = useRouter()

  const onInput = (e: { target: { name: any; value: any; }; }) => {
    setVehicleBody({
      ...vehicleBody,
      [e.target.name]: e.target.value
    })
    console.log(vehicleBody)
  }

  const handleSubmit = () => {
    postNewVehicle(vehicleBody)
    router.push('/')
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.link_home}>
        <Button type="button" variant="outlined" onClick={() => router.push('/')} >Home</Button>
      </div>
      <h1>Nuevo vehiculo</h1>
      <Container>
        <Form className={styles.form_vehicle}>
          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Marca</Form.Label>
            <Form.Control onChange={(ev) => onInput(ev)} name="brand" type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="model">
            <Form.Label>Modelo</Form.Label>
            <Form.Control onChange={(ev) => onInput(ev)} name="model" type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="year">
            <Form.Label>Año</Form.Label>
            <Form.Control onChange={(ev) => onInput(ev)} name="year" type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="color">
            <Form.Label>Color</Form.Label>
            <Form.Control onChange={(ev) => onInput(ev)} name="color" type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="plate">
            <Form.Label>Placa</Form.Label>
            <Form.Control onChange={(ev) => onInput(ev)} name="plate" type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="economicNumber">
            <Form.Label>número económico</Form.Label>
            <Form.Control onChange={(ev) => onInput(ev)} name="economicNumber" type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="vim">
            <Form.Label>Vim</Form.Label>
            <Form.Control onChange={(ev) => onInput(ev)} name="vim" type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="seating">
            <Form.Label>Asientos</Form.Label>
            <Form.Control onChange={(ev) => onInput(ev)} name="seating" type="number" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="carInsurance">
            <Form.Label>seguro de auto</Form.Label>
            <Form.Control onChange={(ev) => onInput(ev)} name="carInsurance" type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="carInsuranceNumber">
            <Form.Label>Número de seguro de automóvil</Form.Label>
            <Form.Control onChange={(ev) => onInput(ev)} name="carInsuranceNumber" type="text" placeholder="" />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Guardar
          </Button>
        </Form>
      </Container>
    </main>
  )
}

export default New