import React, {useState, useEffect} from "react";


function SalespeopleList() {
    const [salespeople, setSalespeople] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:8090/api/salespeople/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <h2>Salespeople</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {salespeople.map(salesperson => {
                        return (
                            <tr key={salesperson.id}>
                                <td>{salesperson.first_name}</td>
                                <td>{salesperson.last_name}</td>
                                <td>{salesperson.employee_id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}


export default SalespeopleList;