import React, { useContext, useEffect } from "react";
import { ExtraContext } from "./ExtraDataProvider";
import { ExtraCard } from "./ExtraCard";
import "./Extra.css";


export const ExtraList = () => {
    const { extras, getExtras } = useContext(ExtraContext)

    useEffect (() => {
        console.log("ExtraList: useEffect - getExtras")
        getExtras()
    }, [])

return (
    <div className="extras">
    {console.log("ExtraList: Render", extras)}
    {
      extras.map(extra => {
        return <ExtraCard key={extra.id} location={extra} />
      })
    }
  </div> 
)

}