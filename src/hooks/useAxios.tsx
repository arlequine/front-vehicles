import React, { useEffect, useState } from 'react'
import axios from 'axios'



const useAxios: React.FC<string> = () => {


    const [listVehicles, setListVehicles] = useState([])

    const getVehicles = async () => {
        const url = `http://localhost:3001/api/v1/vehicles`
        const results = await axios.get(url)
        console.log(results.data)
        setListVehicles(results.data)
    }

    const getVehicleFilter = async (brand: string) => {
      const url = `http://localhost:3001/api/v1/vehicles/brand${brand}`
      const results = await axios.get(url)
      console.log(results.data)
      setListVehicles(results.data)
    }
    
    useEffect(() => {
      getVehicles()
    }, [])
    
  return listVehicles
}

export default useAxios