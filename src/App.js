import React,{useState} from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route,Switch,Link,Redirect} from 'react-router-dom'
import Mainpage from './components/Mainpage'
import Secondpage from './components/Secondpage'
import Réserver from './components/Réserver'
import Footer from './components/Footer'
import Reclamation from './components/Reclamation'
import Seat from './components/SeatR'

function App() {
  return (
<div>

  <Router>
    <Switch>
    <Route exact path="/" component={Mainpage}/> 
    <Route exact path="/Recherche/:villeId" component={Secondpage}/>
    <Route exact path="/Réserver/:voyageId" component={Réserver}/>
    <Route exact path="/Seat/:SeatId" component={Seat}/>
    <Route exact path="/Reclamation" component={Reclamation}/>
    <Route>404 Not Found!</Route>
    </Switch>
  </Router>
</div>
  );
}

export default App;
