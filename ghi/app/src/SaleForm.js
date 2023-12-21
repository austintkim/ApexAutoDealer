import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


function SaleForm(){
    const navigate = useNavigate()
    const [automobiles, setAutomobiles] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [customers, setCustomers] = useState([]);
    const fetchData = async () => {
        const automobilesUrl = "http://localhost:8090/api/sales/automobiles/";
        const automobilesResponse = await fetch(automobilesUrl);
        if (automobilesResponse.ok) {
            const data = await automobilesResponse.json();
            setAutomobiles(data.automobiles);
        }
        const salespeopleUrl = "http://localhost:8090/api/salespeople/";
        const salespeopleResponse = await fetch(salespeopleUrl);
        if (salespeopleResponse.ok) {
            const data = await salespeopleResponse.json();
            setSalespeople(data.salespeople);
        }
        const customersUrl = "http://localhost:8090/api/customers/";
        const customersResponse = await fetch(customersUrl);
        if (customersResponse.ok) {
            const data = await customersResponse.json();
            setCustomers(data.customers);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    const [automobile, setAutomobile] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [price, setPrice] = useState('');
    const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
    }
    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
    }
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const saleData = {}
        saleData.automobile = automobile
        saleData.salesperson = salesperson
        saleData.customer = customer
        saleData.price = price
        const saleJson = JSON.stringify(saleData)
        const automobileData = {}
        automobileData.sold = true
        const automobileJson = JSON.stringify(automobileData)
        const saleUrl = 'http://localhost:8090/api/sales/';
        const automobileUrl = `http://localhost:8100/api/automobiles/${automobile}/`
        const SaleFetchOptions = {
            method: "POST",
            body: saleJson,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const AutomobileFetchOptions = {
            method: "PUT",
            body: automobileJson,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const saleResponse = await fetch(saleUrl, SaleFetchOptions)
        const automobileResponse = await fetch(automobileUrl, AutomobileFetchOptions)
        if (saleResponse.ok) {
            if (automobileResponse.ok) {
                const soldAutomobile = await automobileResponse.json()
                const newSale = await saleResponse.json()
                navigate('/sales')
            }
        }
    }
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h2>Record a new sale</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <select required onChange={handleAutomobileChange} id="automobile" value={automobile} name="automobile" className="form-select">
                    <option value="">Choose an automobile VIN...</option>
                    {automobiles
                        .filter(automobile => automobile.sold === false)
                        .map(automobile => {
                            return (
                                <option key={automobile.vin} value={automobile.vin}>
                                    {automobile.vin}
                                </option>
                            )
                        })
                    }
                    </select>
                </div>
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
                <div className="mb-3">
                    <select required onChange={handleCustomerChange} id="customer" value={customer} name="customer" className="form-select">
                    <option value="">Choose a customer...</option>
                    {customers.map(customer => {
                        return (
                            <option key={customer.id} value={customer.id} >
                                {customer.first_name} {customer.last_name}
                            </option>
                        )
                    })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handlePriceChange} placeholder="Price" required type="text" value={price} name="price" id="price" className="form-control"/>
                    <label htmlFor="price">Price</label>
                </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
}


export default SaleForm;