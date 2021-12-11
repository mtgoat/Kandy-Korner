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
import { OrderList } from "./orders/OrderList";
import { OrderForm } from "./orders/OrderForm";

import { ExtraProvider } from "./extras/ExtraDataProvider";
import { ExtraList } from "./extras/ExtraList";
import { CustomerProvider } from "./customers/CustomerDataProvider";



export const ApplicationViews = () => {
    return (
      
      <ProductProvider>
        <CustomerProvider>
        <EmployeeProvider>  
          <LocationProvider>
            <OrderProvider>
              <ExtraProvider>
                
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="locations/*" element={<LocationList />} />
                    <Route path="products/*" element={<ProductList />} />
                    <Route path="employees*" element={<EmployeeList />} />
                    <Route path="employees/create/*" element={<EmployeeForm />} />
                    <Route path="orders/*" element={<OrderList/>} />
                    <Route path="orders/create/*" element={<OrderForm />}/>
                    <Route path="extras/*" element={<ExtraList />} />
                  </Routes>
                
              </ExtraProvider>
            </OrderProvider> 
          </LocationProvider>
        </EmployeeProvider>
        </CustomerProvider>
      </ProductProvider>
         
    )
}

