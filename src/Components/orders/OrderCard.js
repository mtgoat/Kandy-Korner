import React from "react"
import { useNavigate } from "react-router-dom";
import './Order.css'

console.log(localStorage.kandy_customer)

export const OrderCard = ({order}) => (
    
    <section className="order">
       
        <p className="order__customerName">Order by {order.customer.firstName} {order.customer.lastName}</p>
        <button> Place this order </button>
        <button> Cancel this order </button>
        <button> Edit this order </button>
    </section>
)