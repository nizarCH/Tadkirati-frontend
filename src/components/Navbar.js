import React, { useState, useEffect }  from 'react'
import {BrowserRouter as Router,Link, Redirect, useHistory} from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Profile from '../components/Profile'
import Cart from '../components/Cart'
import Aos from "aos"
import "aos/dist/aos.css"
const Navbar = () => {
    const [login, setLogin] = useState(false)
    const [profile, setProfile] = useState(false)
    const [signup, setSignup] = useState(false)
    const result= localStorage.getItem("user")
    const users=JSON.parse(result)

    const history=useHistory()
    
    const [inlog, setInLog] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [user, setUser] = useState({
        user:{
          nom:"",prenom:"",num_tel:"",email:""
        }
      })
    const Logout=()=>{
        localStorage.removeItem('user')
        setInLog(false)
        window.location.reload();
      
    }

    useEffect(() => {
        if(users!==null){
            setInLog(true)
            setUser(users) 
            Aos.init({duration: 1200});
        }
        Aos.init({duration: 1200});
       },[inlog])

 
    return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark  fixed-top" data-aos="fade-down">
        <a className="navbar-brand" href="/"><i class="far fa-ticket-alt"></i> Tadkirati</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ml-auto">
            
        <li className={inlog?"nav-item none":"nav-item inlog"}>
         <a class="nav-link" href="Reclamation">Réclamation</a>
         </li>
      
             <li className={inlog?"nav-item none":"nav-item inlog"}>
             <a className="nav-link" role="button"><Signup signup={signup} setSignup={setSignup} setLogin={setLogin}/> </a>
         </li>
         <li className={inlog?"nav-item none":"nav-item inlog"}>
         <a className="nav-link" role="button"><Login login={login} setLogin={setLogin} setInLog={setInLog} setAdmin={setAdmin} setSignup={setSignup}/> </a>
         </li>

         <li className={inlog?"nav-item none":"nav-item inlog"}>
         <div class="dropdown show">
            <Cart/>
</div>
         </li>

         <li className={inlog?"nav-item":"nav-item none"}>
         <div class="dropdown show">
  <a class="nav-link " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i class="far fa-user-circle profile"></i>
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">

  <a class="dropdown-item" ><Profile profile={profile} setProfile={setProfile} user={user}/></a>
  <a class="dropdown-item" href="Reclamation">Réclamation</a>
  <a class="dropdown-item"  onClick={Logout}>Logout</a>
    
  </div>
  
</div>
         </li>
        
         <li className={inlog?"nav-item outlog":"nav-item none"}>
         <div class="dropdown show">
         <Cart/>
</div>
         </li>
               
                <div >
                </div>
      
        </ul> 
        </div>
       
        </nav>
     

    </div>

    )
}

export default Navbar
