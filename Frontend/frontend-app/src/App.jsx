
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import ItemNavbar from './layout/items/ItemNavbar.jsx'
import Items from './pages/items/Items.jsx'
import ViewItem from './pages/items/ViewItems.jsx';
import AddItem from './pages/items/AddItems.jsx';
import EditItem from './pages/items/EditItems.jsx';

import Employees from './pages/employees/Employees.jsx';
import AddEmployee from './pages/employees/AddEmployees.jsx';
import ViewEmployee from './pages/employees/ViewEmployees.jsx';
import EditEmployee from './pages/employees/EditEmployees.jsx';

import Reviews from './pages/reviews/reviews.jsx';
import AddReview from './pages/reviews/AddReviews.jsx';
import ViewReview from './pages/reviews/ViewReviews.jsx';

import Vehicles from './pages/vehicles/Vehicles.jsx';
import AddVehicle from './pages/vehicles/AddVehicles.jsx';
import EditVehicle from './pages/vehicles/EditVehicles.jsx';
import ViewVehicle from './pages/vehicles/ViewVehicles.jsx';

function App() {

  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route exact path="/items"            element={<Items/>}/>
          <Route exact path="/items/add"        element={<AddItem/>}/>
          <Route exact path="/items/view/:id"   element={<ViewItem/>}/>
          <Route exact path="/items/edit/:id"   element={<EditItem/>}/>
          {/*
          <Route exact path="/viewuser/:id"   element={<ViewUser/>}/>
          */}

          <Route exact path="/employees"            element={<Employees/>}/>
          <Route exact path="/employees/add"        element={<AddEmployee/>}/>
          <Route exact path="/employees/view/:id"   element={<ViewEmployee/>}/>
          <Route exact path="/employees/edit/:id"   element={<EditEmployee/>}/>

          <Route exact path="/reviews"            element={<Reviews/>}/>
          <Route exact path="/reviews/add"        element={<AddReview/>}/>
          <Route exact path="/reviews/view/:id"   element={<ViewReview/>}/>

          <Route exact path="/vehicles"            element={<Vehicles/>}/>
          <Route exact path="/vehicles/add"        element={<AddVehicle/>}/>
          <Route exact path="/vehicles/view/:id"   element={<ViewVehicle/>}/>
          <Route exact path="/vehicles/edit/:id"   element={<EditVehicle/>}/>
          

        </Routes>
      </Router>

    </div>
  )
}

export default App
