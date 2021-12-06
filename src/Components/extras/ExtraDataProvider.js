import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ExtraContext = createContext()

// This component establishes what data can be used.
export const ExtraProvider = (props) => {
    const [extras, setExtras] = useState([])

    const getExtras = () => {
        return fetch("http://localhost:8088/extras")
        .then(res =>  res.json())
        .then(setExtras)
    }

    const addExtra = extraObj => {
        return fetch("http://localhost:8088/extras", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(extraObj)
        })
        .then(getExtras)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ExtraContext.Provider value={{
            extras, getExtras, addExtra
        }}>
            {props.children}
        </ExtraContext.Provider>
    )
}
