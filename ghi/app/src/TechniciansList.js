import {useState, useEffect} from 'react';

function TechniciansList() {
  const [technicians, setTechnicians] = useState([]);

  const getData = async () => {
    const request = await fetch('http://localhost:8080/api/technicians/');
    if (request.ok) {
      const resp = await request.json();
      setTechnicians(resp.technicians);
    } else {
      throw new Error("Failed to retrieve technicians data");
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return(
    <div>
      <h1>Technicians</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {
            technicians.sort((a,b) => (a.id-b.id)).map(technician => {
              return(<tr key={technician.id}>
                <td>{technician.employee_id}</td>
                <td>{technician.first_name}</td>
                <td>{technician.last_name}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
    );
}

export default TechniciansList;
