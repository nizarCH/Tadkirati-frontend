import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { selectedVoyage, removeselectedVoyage } from '../redux/actions/voyagesActions'
import {BrowserRouter as Router, Route,Switch,Link,Redirect,useHistory} from 'react-router-dom'
import Aos from "aos"
import "aos/dist/aos.css"
import LoadingRes from '../components/LoadingRes'
import Modifier from './Modifier'
import Notfound from './Notfound'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Secondpage = () => {

    const [loading, setLoading] = useState(true)

    const {villeId}= useParams()
    const dispatch= useDispatch()
    const voyage = useSelector(state => state.voyage.destination)
   

  localStorage.setItem("voyage",JSON.stringify(voyage))
  const Villes= localStorage.getItem("voyage")
  const voyageVille=JSON.parse(Villes)
  const [travel, setTravel] = useState(voyageVille)
  const travels=villeId.split('&')
  
  const dataVille={
    id:travels[0],
    nom_fr: travels[2],
    nom_ar:travels[1],
    prix: travels[4],
    date: travels[3],
    psg: travels[5]
  }

     const url = `http://localhost:8000/api/voyage/search/${dataVille.id}`

    const fetchVoyages = async () => {
        try {
          const response = await fetch(url)
          const ligne = await response.json()
          dispatch(selectedVoyage(ligne))
          setLoading(false);
        
        } catch (error) {
          console.log(error)
          setLoading(false);
        }
     
     
      }

      useEffect(() => {
       fetchVoyages();
       Aos.init({duration: 1000});
      },[villeId])

      if(loading){
        return(
          <main>
            <LoadingRes />
          </main>
        )
      }
      if(voyageVille[0]==undefined){

      return (
        <div className="secondpage">
        <Navbar/>
        <div className="Modifier"> <Modifier/></div>
        
        <div><h4 className="title-voyage" data-aos="fade-up">TANGER {'>>>'} {dataVille.nom_fr}</h4></div>
        <Notfound/>
    </div>
    )  
      }
return (
  
<div>
<Navbar/>

        <div className="secondpage">
         <div className="Modifier"> <Modifier/></div>
         <div><h1 className="title-voyage" data-aos="fade-right">TANGER <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i> {dataVille.nom_fr}</h1></div>
              <table className="container" >
    <tr>
<td>

    
    {voyageVille.map((voyage)=>
    {
const {id,titre,depart,nom_fr,nom_ar,ligne_fr,ligne_ar,prix,path}=voyage


    return(        
        <div className="voyage container font-weight-bold" >
    <table className="allvoyages">
      <thead>
        <tr className="row">

       
        <td className="transport" >
          <img src={path} className="bus-img"/> <div>{nom_fr}-{nom_ar}</div>
        </td>
        <td className="ligne">
       <div>  <i className="fas fa-bus bus-icon"></i> {titre}</div>
        </td>
        <td className="locale" >
         <div><i className="fas fa-map-marker-alt locale-icon"></i>{ligne_fr}</div> <div><i className="fas fa-map-marker-alt locale-icon"></i>{ligne_ar}</div>
        </td>
        <td className="depart" > 
       <div> <i className="fas fa-clock"></i>  {depart}</div>
        </td>
        <td className="prix">
       <div> <i className="fas fa-coins"></i>  {dataVille.prix} DH</div>
        </td>
        <td >
          <Link to={`/Seat/${dataVille.date}&${depart}&${id}&${dataVille.prix}&${nom_fr}&${nom_ar}&${titre}&${dataVille.psg}`}><button className="reservation-btn">Réserver</button></Link>

        </td>
        </tr>
      </thead>
    </table>
        </div>
    )})}
      </td>
     </tr>
      </table>
     
       </div>
       <Footer/>
       </div>
    )
    
}

export default Secondpage
