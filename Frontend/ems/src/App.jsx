
import './App.css'
import ItemNavbar from './layout/ItemNavbar.jsx'
import Items from './pages/Items.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>

        <ItemNavbar/>
        
        <Routes>
          <Route exact path="/"                 element={<Items/>}/>

        </Routes>
      </Router>

    </div>
  )
}

export default App
