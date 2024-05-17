"use client";
import axios from 'axios';
import React, { createContext, useState } from 'react'

export const VehiclesContext = createContext();


const VehiclesProvider = ({children}) => {
    const [vehicles, setVehicles] = useState()
    const [vehiclesFilter, setVehiclesFilter] = useState()

    const getVehicles = async () => {
        const url = `http://localhost:3001/api/v1/vehicles`
        const results = await axios.get(url)
        console.log(results.data)
        setVehicles(results.data)
    }

    const getVehicleFilter = async (brand: string) => {
        const url = `http://localhost:3001/api/v1/vehicles/${brand}`
        const results = await axios.get(url)
        console.log(results.data)
        setVehiclesFilter(results.data)
      }

  return (
    <div>
      <VehiclesContext.Provider value ={{
        vehicles, 
        getVehicles, 
        vehiclesFilter, 
        getVehicleFilter}}>
        {children}
      </VehiclesContext.Provider>
    </div>
  )
}

export default VehiclesProvider
