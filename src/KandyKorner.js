import React from "react"
import { LocationProvider } from "./Components/locations/LocationDataProvider"
import { LocationList } from "./Components/locations/LocationList"
import "./KandyKorner.css"


export const KandyKorner = () => {

    return (

    <>
     <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>


     <h2>Locations</h2>
     <LocationProvider>
        <LocationList />
     </LocationProvider>
    
    </>
    )
}