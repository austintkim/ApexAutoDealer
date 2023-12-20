import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './ManufacturersList';
import ManufacturersForm from './ManufacturersForm';
import VehicleModelList from './VehicleModelList';
import VehicleModelForm from './VehicleModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import SalespeopleForm from './SalespeopleForm';
import SalespeopleList from './SalespeopleList';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import SaleForm from './SaleForm';
import SaleList from './SaleList';
import SalespersonHistoryList from './SalespersonHistoryList';

function App() {
  return (
    <BrowserRouter>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
