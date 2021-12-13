import React, {useContext, useEffect} from "react"
import { OrderContext } from "./OrderDataProvider"
import { OrderCard } from "./OrderCard"
import "./Order.css"

export const OrderList = () => {
    const { orders, getOrders} = useContext(OrderContext)

    useEffect (() => {
        console.log("OrderList: useEffect - getOrders")
        getOrders ()
    }, [])
    return (
        <div className="orders">
        {console.log("OrderList: Render", orders)}
        {
          orders.map(order => {
            return <OrderCard key={order.id} order={order} />
          })
        }
      </div>
    )
}