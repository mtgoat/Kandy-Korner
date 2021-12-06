import React from "react"
import './Employee.css'


export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__addName">{employee.location.name}</div>
        <div className="employee__add">{employee.location.address}</div>
        
    </section>
)