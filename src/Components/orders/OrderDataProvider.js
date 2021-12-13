import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const OrderContext = createContext()

// This component establishes what data can be used.
export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([]) 

    const getOrders = () => {
        return fetch("http://localhost:8088/orders?_expand=customer")
        .then(res =>  res.json())
        .then(setOrders)
    }

    const addOrder = orderObj => {
        return fetch("http://localhost:8088/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderObj)
        })
        .then(getOrders)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <OrderContext.Provider value={{
            orders, getOrders, addOrder
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}
