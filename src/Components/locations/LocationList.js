import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationDataProvider";
import { LocationCard } from "./LocationCard";
import "./Location.css";


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect (() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, [])

return (
    <div className="locations">
    {console.log("LocationList: Render", locations)}
    {
      locations.map(location => {
        return <LocationCard key={location.id} location={location} />
      })
    }
  </div> 
)

}