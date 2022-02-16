import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Gamepage from './Gamepage';
function Approute() {
  return (
    <Router>
    <Routes>

        <Route path="/" element={<Gamepage />} />
       












    </Routes>
  
</Router>
  )
}

export default Approute