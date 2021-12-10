// import React, { useContext, useEffect, useState }  from "react"
// import "./OrderItem.css"
// import { useNavigate } from "react-router-dom"
// import { OrderItemContext } from "./orderItems/OrderItemDataProvider"
// import { ProductContext } from "../products/ProductDataProvider"
// import { OrderContext } from "../orders/OrderDataProvider"

// export const OrderItemForm = () => {
//     const {addOrderItem} = useContext(OrderItemContext)
//     const {products, getProducts } = useContext(ProductContext)
//     const {orders, getOrders} = useContext(OrderContext)

   

//     const [orderItems, setOrderItems] = useState({
//         productId: 0,
//         quantity: 0,
//         orderId: 0,
//     })
//     const navigate = useNavigate();

//     useEffect (() => {
//         getProducts().then(getOrders)
//     })

//     const handleControlledInputChange = (event) => {
//         const newOrderItem = {...orderItems}
//         newOrderItem = [event.target.id] = event.target.value

//         setOrderItems(newOrderItem)
//     }

//     const handleClickSaveOrderItem = (event) => {
//             event.preventDefault() //Prevents the browser from submitting the form 
//     {
//     addOrderItem(orderItems).then(()=> navigate("/products"))}
//     }
//     return (
//     <form className="orderItemForm">
//      <fieldset>
//               <div className="form-group">
//                   <label htmlFor="name">Quantity:</label>
//                   <input type="number" id="quantity" name="quantity" onChange={handleControlledInputChange} required  className="form-control" value={orderItems.quantity}/>
//               </div>
//     </fieldset>
//     <fieldset>
//               <div className="form-group">
//                   <label htmlFor="location">Product: </label>
//                   <select defaultValue={orderItems.productId} name="productId" id="productId" className="form-control" >
//                       <option value="0">Select a produc</option>
//                       {locations.map(l => (
//                           <option key={l.id} value={l.id}>
//                               {l.name}
//                           </option>
//                       ))}
//                   </select>
//               </div>
//           </fieldset>   
//      <button className="btn btn-primary"
//             onClick={handleClickSaveOrderItem}></button>
//             </form>
//     )

// }