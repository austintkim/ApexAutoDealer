import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechniciansList from './TechniciansList';
import TechnicianForm from './TechnicianForm';

function App() {
  return (
    <>
    <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technicians" element={<TechniciansList />} />
          <Route path="/technicians/new" element={<TechnicianForm />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
