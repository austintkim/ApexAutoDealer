import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechniciansList from '../ServiceComponents/TechniciansList';
import TechnicianForm from '../ServiceComponents/TechnicianForm';
import ManufacturersList from './ManufacturersList';
import ManufacturersForm from './ManufacturersForm';
import VehicleModelList from './VehicleModelList';
import VehicleModelForm from './VehicleModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import SalespeopleForm from '../SalesComponents/SalespeopleForm';
import SalespeopleList from '../SalesComponents/SalespeopleList';
import AppointmentsList from '../ServiceComponents/AppointmentsList';
import AppointmentForm from '../ServiceComponents/AppointmentForm'
import ServiceHistory from '../ServiceComponents/ServiceHistory';
import CustomerForm from '../SalesComponents/CustomerForm';
import CustomerList from '../SalesComponents/CustomerList';
import SaleForm from '../SalesComponents/SaleForm';
import SaleList from '../SalesComponents/SaleList';
import SalespersonHistoryList from '../SalesComponents/SalespersonHistoryList';


function App() {
  return (
    <>
    <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/manufacturers/create" element={<ManufacturersForm />} />
          <Route path="/models" element={<VehicleModelList />} />
          <Route path="/models/create" element={<VehicleModelForm />} />
          <Route path="/automobiles" element={<AutomobileList />} />
          <Route path="/automobiles/create" element={<AutomobileForm />} />
          <Route path="/salespeople" element={<SalespeopleList />} />
          <Route path="/salespeople/create" element={<SalespeopleForm />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/customers/create" element={<CustomerForm />} />
          <Route path="/sales" element={<SaleList />} />
          <Route path="/sales/create" element={<SaleForm />} />
          <Route path="/sales/history" element={<SalespersonHistoryList />} />
          <Route path="/technicians" element={<TechniciansList />} />
          <Route path="/technicians/create" element={<TechnicianForm />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/appointments/create" element={<AppointmentForm />} />
          <Route path="/history" element={<ServiceHistory />} />
        </Routes>
      </div>
    </>
  );
}


export default App;
