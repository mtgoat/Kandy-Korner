import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const OrderItemContext = createContext()

// This component establishes what data can be used.
export const OrderItemProvider = (props) => {
    const [orderItems, setOrderItems] = useState([])

    const getOrderItems = () => {
        return fetch("http://localhost:8088/orderItems?_expand=product")
        .then(res =>  res.json())
        .then(setOrderItems)
    }

    const addOrderItem = orderItemObj => {
        return fetch("http://localhost:8088/orderItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderItemObj)
        })
        .then(getOrderItems)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <OrderItemContext.Provider value={{
            orderItems, getOrderItems, addOrderItem
        }}>
            {props.children}
        </OrderItemContext.Provider>
    )
}
