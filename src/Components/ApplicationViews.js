import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./locations/LocationDataProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductDataProvider"
import { ProductList } from "./products/ProductList"

import { ProductTypeProdivder} from "./"

import { EmployeeProvider } from "./employees/EmployeeDataProvider"
import { EmployeeList } from "./employees/EmployeeList"

import { ExtraProvider } from "./extras/ExtraDataProvider"
import { ExtraList } from "./extras/ExtraList"


//working on line 9


export const ApplicationViews = () => {
    return (
      <ProductTypeProdivder>
      <ProductProvider>
        <EmployeeProvider>  
          <LocationProvider> 
           <ExtraProvider>
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="locations/*" element={<LocationList />} />
                    <Route path="products/*" element={<ProductList />} />
                    <Route path="employees*" element={<EmployeeList />} />
                    <Route path="extras/*" element={<ExtraList />} />
              </Routes>
               
             </ExtraProvider>
            </LocationProvider>
          </EmployeeProvider>
         </ProductProvider>
         </ProductTypeProdivder>
    )
}

