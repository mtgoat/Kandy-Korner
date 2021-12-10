import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { LocationProvider } from "./locations/LocationDataProvider";
import { LocationList } from "./locations/LocationList";

import { ProductProvider } from "./products/ProductDataProvider";
import { ProductList } from "./products/ProductList";

import { EmployeeProvider } from "./employees/EmployeeDataProvider";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";

import { OrderProvider } from "./orders/OrderDataProvider";
// import { OrderForm} from "./orders/OrderForm";
import { OrderList } from "./orders/OrderList";

import { ExtraProvider } from "./extras/ExtraDataProvider";
import { ExtraList } from "./extras/ExtraList";

import { OrderItemProvider } from "./orderItems/OrderItemDataProvider";
// import { OrderItemForm } from "./orderItems/OrderItemForm";


export const ApplicationViews = () => {
    return (
      
      <ProductProvider>
        <EmployeeProvider>  
          <LocationProvider>
            <OrderProvider>
              <OrderItemProvider>
                <ExtraProvider>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="locations/*" element={<LocationList />} />
                    <Route path="products/*" element={<ProductList />} />
                    <Route path="employees*" element={<EmployeeList />} />
                    <Route path="employees/create/*" element={<EmployeeForm />} />
                    <Route path="orders/*" element={<OrderList/>} />
                    {/* <Route path="orders/create*" element={<><OrderForm /><OrderItemForm /></>} /> */}
                    <Route path="extras/*" element={<ExtraList />} />
                  </Routes>
                </ExtraProvider>
              </OrderItemProvider>
            </OrderProvider> 
          </LocationProvider>
        </EmployeeProvider>
      </ProductProvider>
         
    )
}

