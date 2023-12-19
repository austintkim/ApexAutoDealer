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
          <Route path="/technicians" element={<TechniciansList />} />
          <Route path="/technicians/new" element={<TechnicianForm />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
