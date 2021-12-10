import React from "react"
import { useNavigate } from "react-router-dom";
import './Product.css'


export const ProductCard = ({product}) => {
    const navigate = useNavigate() 

    const priceN = Number(product.price)
    let PriceDis ={
        style:"currency",
        currency: "USD",
    }

    return (

    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">{priceN.toLocaleString("en-US", PriceDis)}</div>
        <div className="product__typeName">{product.productType.name}</div>
        <button onClick={()=> {navigate("/orders/create")}}>Add to your order</button>
    </section>
    )
    }