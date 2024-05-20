"use client";
import { Vehicle } from '@/types';
import axios from 'axios';
import React, { createContext, useState } from 'react'

export const VehiclesContext = createContext();


const VehiclesProvider = ({children}) => {
    const [vehicles, setVehicles] = useState()

    // const getVehicles = async () => {
    //     const url = `http://localhost:3001/api/v1/vehicles`
    //     const results = await axios.get(url)
    //     console.log(results.data)
    //     setVehicles(results.data)
    // }

    const getVehicleFilter = async (brand: string) => {
      const url = `http://localhost:3001/api/v1/vehicles/${brand ? brand : ''}`
      const results = await axios.get(url)
      console.log(results.data)
      setVehicles(results.data)
    }

    const postNewVehicle = async (body: Vehicle) => {
      const url = `http://localhost:3001/api/v1/vehicles`
      await axios.post(url, body)
    }
    const deleteVehicle = async (id: number) => {
      const url = `http://localhost:3001/api/v1/vehicles/${id}`
      await axios.delete(url)
    }

  return (
    <div>
      <VehiclesContext.Provider value ={{
        vehicles,
        getVehicleFilter,
        postNewVehicle,
        deleteVehicle}}>
        {children}
      </VehiclesContext.Provider>
    </div>
  )
}

export default VehiclesProvider
