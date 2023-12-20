import React, {useState, useEffect} from "react";


function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const filterData = async (vin) => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments.filter(appointment => appointment.vin == vin));
        }
    }

    return (
        <div>
            <h2>Service History</h2>
            <div className="mb-3">
                <input onChange={handleVinChange} type="search" placeholder="Search by VIN" id="vin-search" value={vin} name="vin-search" />
                <button onClick = {()=> {
                    filterData(vin)
                }}
                >Search</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments
                        .map(appointment => {
                            const date = appointment.date_time.slice(0, 10);
                            const time = appointment.date_time.slice(10, appointment.date_time.length);
                            if(appointment.automobile.sold && appointment.vin === appointment.automobile.vin) {
                            return (
                                <tr key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>Yes</td>
                                    <td>{appointment.customer}</td>
                                    <td>{date}</td>
                                    <td>{time}</td>
                                    <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                    <td>{appointment.reason}</td>
                                    <td>{appointment.status}</td>
                                </tr>
                            )
                        } else {
                            return (
                                <tr key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>No</td>
                                <td>{appointment.customer}</td>
                                <td>{date}</td>
                                <td>{time}</td>
                                <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.status}</td>
                            </tr>
                            )
                        }
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default ServiceHistory;
