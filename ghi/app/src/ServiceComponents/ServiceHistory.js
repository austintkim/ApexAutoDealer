import React, {useState, useEffect} from "react";


function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        } else {
            throw new Error('Failed to retrieve appointments data')
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
        filterData(value);
    }

    const filterData = async (vin) => {
        setAppointments(appointments.filter(appointment => appointment.vin[0] == vin[0] && appointment.vin.indexOf(vin) > -1));
    }


    return (
        <div>
            <h2>Service History</h2>
            <div className="mb-3">
                <input onChange={handleVinChange} type="text" placeholder="Search by VIN" id="vin-search" value={vin} name="vin-search" />
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
                            const formatted_date_time = new Date(appointment.date_time).toLocaleString();
                            const formatted_date = formatted_date_time.substring(0, formatted_date_time.indexOf(","));
                            const formatted_time = formatted_date_time.substring(formatted_date_time.indexOf(" "), formatted_date_time.length);
                            return (
                                <tr key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.special_vip}</td>
                                    <td>{appointment.customer}</td>
                                    <td>{formatted_date}</td>
                                    <td>{formatted_time}</td>
                                    <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                    <td>{appointment.reason}</td>
                                    <td>{appointment.status}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default ServiceHistory;
