import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function ManufacturersForm(){
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}
        data.name = name
        const json = JSON.stringify(data)
        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchOptions = {
            method: "POST",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(manufacturerUrl, fetchOptions)
        if (response.ok) {
            const newManufacturer = await response.json()
            navigate('/manufacturers')
        }
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h2>Add a manufacturer</h2>
            <form onSubmit={handleSubmit} id="create-manufacturer-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} placeholder="Manufacturer name" required type="text" value={name} name="name" id="name" className="form-control"/>
                <label htmlFor="name">Manufacturer name...</label>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default ManufacturersForm;