import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

const initialData = {
  date:"",
  time:"",
  reason: "",
  vin:"",
  customer:"",
  technician:""
}

function AppointmentForm() {
  const navigate = useNavigate();

  const [technicians, setTechnicians] = useState([]);


  const [formData, setFormData] = useState(initialData);

  const fetchData = async () => {
    const url = 'http://localhost:8080/api/technicians/';
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        setTechnicians(data.technicians);
    } else {
        throw new Error('Failed to retrieve technicians data')
    }
  }

  useEffect(() => {
      fetchData();
    }, []);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value

    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const stringDate = formData.date.toString();
    const stringTime = formData.time.toString();

    const date_time = new Date(`${stringDate} ${stringTime}`);

    formData["date_time"] = date_time;

    delete formData.date;
    delete formData.time;

    const appointmentUrl = 'http://localhost:8080/api/appointments/';

    const fetchConfig = {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(appointmentUrl, fetchConfig);
    if (response.ok) {
        navigate("/appointments");
        setFormData(initialData);
    } else {
        throw new Error('Failed to create appointment')
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new appointment</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input onChange={handleFormChange} placeholder="Automobile VIN" required type="text" name = "vin" id="vin" className="form-control" value={formData.vin}/>
                <label htmlFor="vin">Automobile VIN (17 character count limit - i.e. "1C3CC5FB2AN121175")</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleFormChange} placeholder="Customer" required type="text" name = "customer" id="customer" className="form-control" value={formData.customer}/>
                <label htmlFor="customer">Customer</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleFormChange} placeholder="Date" required type="date" name = "date" id="date" className="form-control" value={formData.date}/>
                <label htmlFor="date">Date</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleFormChange} placeholder="Time" required type="time" name = "time" id="time" className="form-control" value={formData.time}/>
                <label htmlFor="date">Time</label>
              </div>
              <div className="mb-3">
                <select onChange={handleFormChange}required name = "technician" id="technician" className="form-select" value={formData.technician}>
                  <option value="">Choose a technician</option>
                  {technicians.map(technician => {
                      return (
                          <option key={technician.id} value={technician.id}>
                              {`${technician.first_name} ${technician.last_name}`}
                          </option>
                      )
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleFormChange} placeholder="Reason" required type="text" name = "reason" id="reason" className="form-control" value={formData.reason}/>
                <label htmlFor="reason">Reason</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  }

  export default AppointmentForm;
