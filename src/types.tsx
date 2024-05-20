type VehicleRoute = {
    Geojson: Features
  }
type Features = [
    Coords,
    type: String,
    Properties: {
        address: string,
        name: string,
        type: string
    },

]

type Coords = [String]

type Vehicle = {
    plate: string,
    economicNumber: string,
    vim: string,
    seating: number,
    carInsurance: string,
    carInsuranceNumber: string,
    brand: string,
    model: string,
    year: string,
    color: string
}


export type {
    VehicleRoute,
    Vehicle
}