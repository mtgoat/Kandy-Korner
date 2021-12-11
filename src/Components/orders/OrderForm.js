import React, { useContext, useEffect, useState } from "react";
import "./Order.css";
import { OrderContext } from "./OrderDataProvider";
import { useNavigate, useParams } from "react-router-dom"
import { ProductContext } from "../products/ProductDataProvider";
import { CustomerContext} from "../customers/CustomerDataProvider";


export const OrderForm = () => {
       const { addOrder } = useContext(OrderContext)
       const { customers, getCustomers} = useContext(CustomerContext)
       const { products, getProducts} = useContext(ProductContext)

       const [order, setOrder] = useState({
       customerId: +localStorage.kandy_customer,
       productId:0,
       quantity:1
       })
      const [isLoading, setIsLoading] = useState(true);
       const {productId} = useParams();//this is to update the form
       
       
       //this is to change a location
       const navigate=useNavigate()

       useEffect (() => {
            getProducts().then(getCustomers)
       }, [])

       const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
       const newOrder = { ...order }
      //animal is an object with properties.
      //set the property to the new value
        newOrder[event.target.id]=event.target.value
      //update state
      console.log("newoOrder handleControleEvent", newOrder)
        setOrder(newOrder)
       }

    const handleSaveOrder = () => {
      if (parseInt(order.productId) === 0) {
          window.alert("Please select a product")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (productId){
          //PUT - update
          addOrder({
              id: order.id,
              productId:parseInt(order.productId),
              customerId:+localStorage.kandy_customer,
              quantity: order.quanity 
          })
          .then(() => navigate(`/orders/detail/${order.id}`))
        }else {
          //POST - add
          addOrder({
            productId:parseInt(order.productId),
            customerId:+localStorage.kandy_customer,
            quantity: order.quanity 
          })
          .then(() => navigate("/orders"))
        }
      }
    }


    return (
        <form className="orderForm">
        <h2 className="orderForm__title">Your Order</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="CanyName">Candy Product: </label>
            <select value={order.productId} name="productId"  id="productId" className="form-control"onChange={handleControlledInputChange}>
            <option value="0">Select Product</option>
              {products.map(p => (
                <option key={p.id} value={p.id}>
                    {p.name}
                </option>
              ))}
            </select>
          </div> 
        </fieldset>
       
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveOrder()
          }}> Add to My Order </button>
      </form>
    )
    

}
