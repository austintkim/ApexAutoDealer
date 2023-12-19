import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function VehicleModelForm(){
    const navigate = useNavigate()

    const [manufacturers, setManufacturers] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [name, setName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    }
    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}
        data.name = name
        data.picture_url = pictureUrl
        data.manufacturer_id = manufacturer
        const json = JSON.stringify(data)
        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchOptions = {
            method: "POST",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(modelUrl, fetchOptions)
        if (response.ok) {
            const newVehicleModel = await response.json()
            navigate('/models')
        }
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h2>Add a vehicle model</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} placeholder="Model name" required type="text" value={name} name="name" id="name" className="form-control"/>
                <label htmlFor="name">Model name...</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePictureUrlChange} placeholder="Picture URL" required type="url" value={pictureUrl} name="pictureUrl" id="pictureUrl" className="form-control"/>
                <label htmlFor="pictureUrl">Picture URL...</label>
              </div>
              <div className="mb-3">
                <select required onChange={handleManufacturerChange} id="manufacturer" value={manufacturer} name="manufacturer" className="form-select">
                  <option value="">Choose a manufacturer...</option>
                  {manufacturers.map(manufacturer => {
                    return (
                        <option key={manufacturer.href} value={manufacturer.id} >
                            {manufacturer.name}
                        </option>
                    )
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default VehicleModelForm;