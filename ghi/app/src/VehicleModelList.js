import React, {useState, useEffect} from "react";
import './index.css'

function VehicleModelList() {
    const [vehicleModels, setVehicleModels] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setVehicleModels(data.models);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2>Models</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturers</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicleModels.map(vehicleModel => {
                        return (
                            <tr key={vehicleModel.href}>
                                <td>{ vehicleModel.name }</td>
                                <td>{ vehicleModel.manufacturer.name }</td>
                                <td>
                                    <img className="img" src={vehicleModel.picture_url} alt="vehicle"/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default VehicleModelList;