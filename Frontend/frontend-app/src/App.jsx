
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ItemNavbar from './layout/items/ItemNavbar.jsx'
import Items from './pages/items/Items.jsx'
import ViewItem from './pages/items/ViewItems.jsx';
import AddItem from './pages/items/AddItems.jsx';


import Employees from './pages/employees/Employees.jsx';
import AddEmployee from './pages/employees/AddEmployees.jsx';
import ViewEmployee from './pages/employees/ViewEmployees.jsx';
import EditItem from './pages/items/EditItems.jsx';

function App() {

  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route exact path="/items"                 element={<Items/>}/>
          <Route exact path="/items/add"                 element={<AddItem/>}/>
          <Route exact path="/items/view/:id"        element={<ViewItem/>}/>
          <Route exact path="/items/edit/:id"   element={<EditItem/>}/>
          {/*
          <Route exact path="/viewuser/:id"   element={<ViewUser/>}/>
          */}

          <Route exact path="/employees"                 element={<Employees/>}/>
          <Route exact path="/employees/add"                 element={<AddEmployee/>}/>
          <Route exact path="/employees/view/:id"        element={<ViewEmployee/>}/>

        </Routes>
      </Router>

    </div>
  )
}

export default App
