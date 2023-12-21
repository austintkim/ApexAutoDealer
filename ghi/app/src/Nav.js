import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Dropdown>
            <Dropdown.Toggle className="test" id="dropdown-basic">
              Inventory
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown_menu'>
              <Dropdown.Item as={NavLink} to="/manufacturers" end>
                Manufacturers list
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/manufacturers/create">
                Add a manufacturer
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/models" end>
                Vehicle models list
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/models/create">
                Add a vehicle model
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/automobiles" end>
                Automobiles List
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/automobiles/create">
                Add an automobile
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sale
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown_menu'>
              <Dropdown.Item as={NavLink} to="/salespeople" end>
                Salespeople
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/salespeople/create">
                Add a salesperson
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/customers" end>
                Customer
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/customers/create">
                Add a customer
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/sales" end>
                Sales
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/sales/create">
                Add a sale
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Service
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown_menu'>
              <Dropdown.Item as={NavLink} to="/technicians" end>
                Technicians
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/technicians/create">
                Add a technician
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/appointments" end>
                Appointments
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/appointments/create">
                Create an appointment
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/history">
                Service History
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
