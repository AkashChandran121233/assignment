
import './App.css';
import Addproduct from './Pages/Addproduct';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}>
              <Route index element = {<Dashboard/>}/>
              <Route path='/addproduct' element={<Addproduct/>}/> 
          </Route>
          

        </Routes>
      </Router> 
      
    </div>
  );
}

export default App;
