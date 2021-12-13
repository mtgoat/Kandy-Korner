import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CustomerContext } from "../customers/CustomerDataProvider";
import { OrderContext } from "../orders/OrderDataProvider";
import './Product.css'
import { ProductContext } from "./ProductDataProvider";


export const ProductCard = ({product}) => {
    const navigate = useNavigate() 
    const priceN = Number(product.price)
    let PriceDis ={
        style:"currency",
        currency: "USD",
    }
    const { addOrder } = useContext(OrderContext)
    const [order, setOrder] = useState ({
        customerId: +localStorage.kandy_customer,
        productId:0,
        quantity:1
    })
    console.log("can I see inital setting for order?", order)
    const { customers, getCustomers} = useContext(CustomerContext)
    useEffect(() => {
        getCustomers().then()
      }, [])

    function handleSaveOrder (event){
    const newOrder = { ...order}

    newOrder[event.target.id] = parseInt(event.target.value)
    setOrder(newOrder)
    addOrder(newOrder)
    console.log("can I see new order?", newOrder)
    navigate("/orders/create")
    }

    return (

    <section className="product">
            <h3  className="product__name">{product.name}</h3>
        <div className="product__price">{priceN.toLocaleString("en-US", PriceDis)}</div>
        <div className="product__typeName">{product.productType.name}</div>
        <button id="productId" value={product.id} onClick={event => handleSaveOrder(event)}>Add to your order</button>
    </section>
    )
    }

//onClick = eventHandler