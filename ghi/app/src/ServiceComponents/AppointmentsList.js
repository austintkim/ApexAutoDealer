import React, {useState, useEffect} from "react";


function AppointmentsList() {
    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        } else {
            throw new Error('Failed to retrieve appointments data');
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleCancel = async (id) => {

        const cancelUrl = `http://localhost:8080/api/appointments/${id}/cancel/`

        const fetchConfig = {
            method: "put",
            body: JSON.stringify({"status":"Canceled"}),
            headers: {
                'Content-Type': 'application/json',
            },

        };

        const response = await fetch(cancelUrl, fetchConfig);
        if (response.ok) {
            fetchData();
        } else {
            throw new Error('Failed to cancel appointment');
      }
    }

    const handleFinish = async (id) => {

        const finishUrl = `http://localhost:8080/api/appointments/${id}/finish/`

        const fetchConfig = {
            method: "put",
            body: JSON.stringify({"status":"Finished"}),
            headers: {
                'Content-Type': 'application/json',
            },

        };

        const response = await fetch(finishUrl, fetchConfig);
        if (response.ok) {
            fetchData();
        } else {
            throw new Error('Failed to mark appointment as finished');
        }
    }
    return (
        <div>
            <h2>Appointments</h2>
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
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        const formatted_date_time = new Date(appointment.date_time).toLocaleString();
                        const formatted_date = formatted_date_time.substring(0, formatted_date_time.indexOf(","));
                        const formatted_time = formatted_date_time.substring(formatted_date_time.indexOf(" "), formatted_date_time.length);
                        if (appointment.status === "Created"){
                            return(
                                <tr key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.special_vip}</td>
                                    <td>{appointment.customer}</td>
                                    <td>{formatted_date}</td>
                                    <td>{formatted_time}</td>
                                    <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                    <td>{appointment.reason}</td>
                                    <td><button onClick={()=> {
                                        handleCancel(appointment.id)
                                    }} className="btn btn-danger">Cancel</button>
                                    <button onClick={()=> {
                                        handleFinish(appointment.id)
                                    }} className="btn btn-success">Finish</button>
                                    </td>
                                </tr>
                            )

                    }})
                }


                </tbody>
            </table>
        </div>
    );
}

export default AppointmentsList;
