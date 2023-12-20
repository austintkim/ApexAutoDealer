import React, {useState, useEffect} from "react";

function SalespersonHistoryList(){
    const [sales, setSales] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const fetchData = async () => {
        const salespeopleUrl = "http://localhost:8090/api/salespeople/";
        const salespeopleResponse = await fetch(salespeopleUrl);
        if (salespeopleResponse.ok) {
            const data = await salespeopleResponse.json();
            setSalespeople(data.salespeople);
        }

        const saleUrl = "http://localhost:8090/api/sales/";
        const saleResponse = await fetch(saleUrl);
        if (saleResponse.ok) {
            const data = await saleResponse.json();
            setSales(data.sales);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    const [salesperson, setSalesperson] = useState('');
    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
    }

    return (
      <div>
        <h2>Salesperson History</h2>
        <div className="mb-3">
            <select required onChange={handleSalespersonChange} id="salesperson" value={salesperson} name="salesperson" className="form-select">
            <option value="">Choose a salesperson...</option>
            {salespeople.map(salesperson => {
                return (
                    <option key={salesperson.id} value={salesperson.id} >
                        {salesperson.first_name} {salesperson.last_name}
                    </option>
                )
            })}
            </select>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Salesperson Name</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {sales
                    .filter(sale => sale.salesperson.id == salesperson)
                    .map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                                <td>{sale.automobile.vin}</td>
                                <td>{sale.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    )
}

export default SalespersonHistoryList;