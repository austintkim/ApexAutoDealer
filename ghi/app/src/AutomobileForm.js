import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function AutomobileForm(){
    const navigate = useNavigate()

    const [models, setModels] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model, setModel] = useState('');
    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }
    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }
    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}
        data.color = color
        data.year = year
        data.vin = vin
        data.model_id = model
        const json = JSON.stringify(data)
        const automobileUrl = 'http://localhost:8100/api/automobiles/';
        const fetchOptions = {
            method: "POST",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(automobileUrl, fetchOptions)
        if (response.ok) {
            const newAutomobile = await response.json()
            navigate('/automobiles')
        }
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h2>Add an automobile to inventory</h2>
            <form onSubmit={handleSubmit} id="create-manufacturer-form">
              <div className="form-floating mb-3">
                <input onChange={handleColorChange} placeholder="Color..." required type="text" value={color} name="color" id="color" className="form-control"/>
                <label htmlFor="color">Color...</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleYearChange} placeholder="Year..." required type="number" value={year} name="year" id="year" className="form-control"/>
                <label htmlFor="year">Year...</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleVinChange} placeholder="VIN..." required type="text" value={vin} name="vin" id="vin" className="form-control"/>
                <label htmlFor="vin">VIN...</label>
              </div>
              <div className="mb-3">
                <select required onChange={handleModelChange} id="model" value={model} name="model" className="form-select">
                  <option value="">Choose a model...</option>
                  {models.map(model => {
                    return (
                        <option key={model.href} value={model.id} >
                            {model.name}
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

export default AutomobileForm;