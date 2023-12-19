import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function CustomerForm(){
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }
    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }
    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}
        data.first_name = firstName
        data.last_name = lastName
        data.employee_id = employeeId
        const json = JSON.stringify(data)
        const salespeopleUrl = 'http://localhost:8090/api/salespeople/';
        const fetchOptions = {
            method: "POST",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(salespeopleUrl, fetchOptions)
        if (response.ok) {
            const newSalesperson = await response.json()
            navigate('/salespeople')
        }
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h2>Add a Salesperson</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input onChange={handleFirstNameChange} placeholder="First name" required type="text" value={firstName} name="firstName" id="firstName" className="form-control"/>
                <label htmlFor="firstName">First name...</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleLastNameChange} placeholder="Last name" required type="text" value={lastName} name="lastName" id="lastName" className="form-control"/>
                <label htmlFor="lastName">Last name...</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleEmployeeIdChange} placeholder="Employee ID" required type="text" value={employeeId} name="employeeId" id="employeeId" className="form-control"/>
                <label htmlFor="employeeId">Employee ID...</label>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default CustomerForm;