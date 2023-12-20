import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechniciansList from './TechniciansList';
import TechnicianForm from './TechnicianForm';
import ManufacturersList from './ManufacturersList';
import ManufacturersForm from './ManufacturersForm';
import VehicleModelList from './VehicleModelList';
import VehicleModelForm from './VehicleModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import SalespeopleForm from './SalespeopleForm';
import SalespeopleList from './SalespeopleList';
import AppointmentsList from './AppointmentsList';
import AppointmentForm from './AppointmentForm'
import ServiceHistory from './ServiceHistory';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import SaleForm from './SaleForm';
import SaleList from './SaleList';
import SalespersonHistoryList from './SalespersonHistoryList';

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
