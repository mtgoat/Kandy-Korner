import React from "react"
import './Employee.css'


export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.firstName} {employee.lastName}</h3>
        {employee.manager? <div className="employee__mngr">Manager</div>: <span></span>}
        <div className="employee__addName">{employee.location.name}</div>
        <div className="employee__add">{employee.location.address}</div>
        
    </section>
)