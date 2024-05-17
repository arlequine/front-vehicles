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


export type {
    VehicleRoute
}