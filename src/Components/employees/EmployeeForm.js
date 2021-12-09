import React, {useContext, useEffect, useState} from "react";
import { EmployeeContext } from "./EmployeeDataProvider";
import { LocationContext } from "../locations/LocationDataProvider";
import "./Employee.css";
import { useNavigate } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState ({
        firstName:"",
        lastName: "",
        manager:  null,
        fullTime: null,
        hourlyRate: 0,
        locationId: 0
    });

    const navigateNE = useNavigate ();

    useEffect (() => {
        getLocations()
        .then()
    }, [])

    const handleControlledInputChange = (event) => {

        let newEmployee = { ...employee }

        newEmployee[event.target.id] = event.target.value

        setEmployee(newEmployee)
    }

    const handeClickRegisterEmployee = (event) => {
        event.preventDefault()


        const locationId = parseInt (employee.locationId)

        employee.locationId = locationId
// which is better null or undefiend? 

        if (locationId === 0){
            window.alert("Please full out all information in the form")
        }else {
            
         addEmployee(employee)
         .then(() => navigateNE("/employees"))
        }
    }

return (
<form className="employeeForm">
    <h2 className="employeeForm__title">New Employee Register</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="firstName">Employee First Name:</label>
            <input type="text" id="firstName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee First Name" value={employee.firstName}/>
        </div>
    </fieldset>

    <fieldset>
        <div className="form-group">
            <label htmlFor="lastName">Employee Last Name:</label>
            <input type="text" id="lastName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee Last Name" value={employee.lastName}/>
        </div>
    </fieldset>

    <fieldset>
            <div className="form-group">
                <label htmlFor="location">Choose a location: </label>
                <select onChange={handleControlledInputChange} defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control">
                    <option  value="0">Select a location</option>
                    {locations.map(l => (
                        <option key={l.id} value={l.id} >
                            {l.name}
                        </option>
                    ))}
                </select>
            </div>
    </fieldset>

    <fieldset>
                <div className="form-group">
                    <input type="checkbox" id="manager" name="manager" value={employee.manager}></input>
                    <label htmlfor="manager">Are you a manager?</label>
                </div>
    </fieldset>
          <button className="btn btn-primary"
            onClick={handeClickRegisterEmployee}>
            Save New Employee Registration
          </button>
</form>

)
}