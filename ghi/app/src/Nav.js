import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
// import './index.css'


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
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Inventory
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown_menu'>
              <Dropdown.Item>
                <NavLink to="/manufacturers">Manufacturers list</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/manufacturers/create">Add a manufacturer</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/models">Vehicle models list</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/models/create">Add a vehicle model</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/automobiles">Automobiles List</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/automobiles/create">Add an automobiles</NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sale
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown_menu'>
              <Dropdown.Item>
                <NavLink to="/salespeople">Salespeople</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/salespeople/create">Add a salesperson</NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Service
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown_menu'>
              <Dropdown.Item>
                <NavLink to="">Dropdown Item</NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
