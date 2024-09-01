
import './App.css'
import ItemNavbar from './layout/items/ItemNavbar.jsx'
import Items from './pages/items/Items.jsx'
import ViewItem from './pages/items/ViewItems.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route exact path="/items"                 element={<Items/>}/>
          <Route exact path="/items/view/:id"                 element={<ViewItem/>}/>
          {/*
          <Route exact path="/viewuser/:id"   element={<ViewUser/>}/>
          */}

        </Routes>
      </Router>

    </div>
  )
}

export default App
