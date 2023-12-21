import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const initialData = {
  first_name: "",
  last_name:"",
  employee_id:"",
}

function TechnicianForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialData);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const technicianUrl = 'http://localhost:8080/api/technicians/';

    const fetchConfig = {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
    };

    const response = await fetch(technicianUrl, fetchConfig);
    if (response.ok) {
      navigate("/technicians");
      setFormData(initialData);
    } else {
        throw new Error('Failed to create a new technician');
    }
  }

  return (
    <div className="container">
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new technician</h1>
          <form onSubmit={handleSubmit} id="create-conference-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="Employee ID" required type="text" name = "employee_id" id="employee_id" className="form-control" value={formData.employee_id}/>
              <label htmlFor="name">Employee ID</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="First name" required type="text" name = "first_name" id="first_name" className="form-control" value={formData.first_name}/>
              <label htmlFor="first_name">First name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="Last name" required type="text" name = "last_name" id="last_name" className="form-control" value={formData.last_name}/>
              <label htmlFor="last_name">Last name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default TechnicianForm;
