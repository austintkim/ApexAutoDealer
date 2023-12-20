import React, {useState} from "react";
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
        data.address = address
        data.phone_number = phoneNumber
        const json = JSON.stringify(data)
        const customersUrl = 'http://localhost:8090/api/customers/';
        const fetchOptions = {
            method: "POST",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(customersUrl, fetchOptions)
        if (response.ok) {
            const newCustomer = await response.json()
            navigate('/customer')
        }
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h2>Add a Customer</h2>
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
                <input onChange={handleAddressChange} placeholder="Address" required type="text" value={address} name="address" id="address" className="form-control"/>
                <label htmlFor="address">Address...</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePhoneNumberChange} placeholder="Phone number" required type="text" value={phoneNumber} name="phoneNumber" id="phoneNumber" className="form-control"/>
                <label htmlFor="phoneNumber">Phone number...</label>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default CustomerForm;