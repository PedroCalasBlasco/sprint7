import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";


import Home from "./components/home/home";
import Presupuesto from "./components/presupesto/presupuesto";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes> 
            <Route path='/Form' element={<Presupuesto />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
