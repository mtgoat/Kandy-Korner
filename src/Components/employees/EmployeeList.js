import React, {useContext, useEffect} from "react";
import { EmployeeContext } from "./EmployeeDataProvider";
import { EmployeeCard } from "./EmployeeCard";
import "./Employee.css";
import { useNavigate } from "react-router-dom";


export const EmployeeList = () => {
    const { employees, getEmployees } =
    useContext(EmployeeContext)
    const navigateE = useNavigate ()

    useEffect(() => {
        console.log("EmployeeList:useEffect - getEmployees")
        getEmployees ()
    }, [])

    return (
        <>
        <h2>Employees</h2>
        <button onClick={() => {navigateE("create")}}>New Employee Register</button>
        <div className="employees">
            {console.log("EmployeeList:Render", employees)}
            {
            employees.map(employee => {
                return <EmployeeCard key={employee.id} employee={employee}/>
            })
            }


        </div>
        </>
    )


}