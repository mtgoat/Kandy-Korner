import React from "react"
import './Location.css'


export const LocationCard = ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__add">{location.address}</div>
        <div className="location__sqF">{location.squareFootage}</div>
        
    </section>
)