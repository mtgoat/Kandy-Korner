import React from "react"
import { useNavigate } from "react-router-dom";
import './Order.css'

export const OrderCard = ({order}) => (

    
    <section className="order">
        <p className="order__customerName">Order by {order.customer.firstName} {order.customer.lastName}</p>

        
    </section>
)