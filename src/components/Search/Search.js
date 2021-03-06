import React,{useState, useEffect} from 'react'
import Départ from './Départ'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid } from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'
import Aos from "aos"
import "aos/dist/aos.css"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {BrowserRouter as Router,Link, Redirect, useHistory} from 'react-router-dom'


export const Search = () => {
    const voyages = useSelector(state => state.allVoyages.voyages)

    const [voyage, setVoyage] = useState("")
    const [Dates, setDate]=useState(null)
    const [passager, setPassager] = useState("")
    const arrayP=["1","2","3","4","5"]
    const history=useHistory()
    const [voyageError, setVoyageError] = useState(true)
    const [dateError, setDateError] = useState(true)
    const [passagerError, setPassagerError] = useState(true)
    //============Filtrage==========//
    var date = new Date(Dates)
    var finaldate = date.getFullYear() + '-' + (date.getMonth() + 1)+ '-' +  date.getDate()

    const filtervoyage = voyages.filter((voy)=>voy.nom_fr ===  voyage)
    const voyid = filtervoyage.map((voyage)=> voyage.id)
    const voyar= filtervoyage.map((voyage)=> voyage.nom_ar)
    const voyprix=filtervoyage.map((voyage)=> voyage.prix)
    
    const dataV={
        id:voyid,
        nom_fr: voyage,
        nom_ar:voyar,
        prix: voyprix,
        date: finaldate,
        psg: passager
    }
 
   

     localStorage.setItem("data-voyages",JSON.stringify(voyages))
     localStorage.setItem("Date",Dates)
     //============Errors==========//
    const handlevoyage= (voy)=>{
        if(voy == "" || voy == null){
            setVoyageError(false)
        }
        else{
            setVoyageError(true)
        }
    }
    const handlepassager= (voy)=>{
        if(voy==""|| voy==null){
            setPassagerError(false)
        }
        else{
            setPassagerError(true)
        }
    }
    const handledate= (voy)=>{
        if(voy=="" || voy=="1970-1-1"){
            setDateError(false)
        }
        else{
            setDateError(true)
        }
    }
    const handleError= ()=>{
        handlevoyage(voyage)
        handlepassager(passager)
        handledate(finaldate)
    }
    const Redirect=()=>{
        if(voyage!=="" && passager!=="" && finaldate!=="1970-1-1" ){
            history.push(`/Recherche/${dataV.id}&${dataV.nom_ar}&${dataV.nom_fr}&${dataV.date}&${dataV.prix}&${dataV.psg}`)
        }
    
    }
    const Callfunc=()=>{
        handleError()
        Redirect()
    }
console.log(passager=="")
    return (
        <div className="landing">
             <section className="home-inner">
                 <div className="Vcontainer container">
             {/* select box */}
                    <div data-aos="fade-down" className="select-box">
            <Départ/>
            
                {/* Arrivée */}
                
    <Grid container justify="center" className="Grid">
                        <Autocomplete
                    value={voyage}
                    className="selected"
                    onChange={(event, value) => setVoyage(value)}
                    defaultValue="villeArrivée" 
                    options={voyages.map((voyage)=>{return (voyage.nom_fr)})}
                    renderInput={(params) =>  <TextField error {...params}  variant="outlined" placeholder="Ville D'Arrivée" helperText={voyageError? "":"Saisir Voyage!"} required/>}
                         />
    </Grid> 
   {/* Passager */}
   <Grid container justify="center">
                        <Autocomplete
                    value={passager}
                    className="selected"
                    onChange={(event, value) => setPassager(value)}
                    options={arrayP.map((voyage)=> voyage)}
                    renderInput={(params) => <TextField error {...params}  variant="outlined" helperText={passagerError? "":"Saisir Passager!"} placeholder="Passagers" required/>}
                         />
    </Grid> 
                {/* Date */}
            
                <DatePicker 
                required
            className="Date selected"
            selected={Dates}
            onChange={date => setDate(date)}
            closeOnScroll={e => e.target === document}
            dateFormat='yyyy-MM-dd'
            minDate={new window.Date()}
            placeholderText="Choisir Date"
            />
            <div className="dateError">{dateError? "":"Saisir Date!"}</div>
            {/* Button */}
       <div>
           
                <button data-aos="fade-up" className="Search-btn" onClick={()=>Callfunc()}>Rechercher</button>
         
           
           </div>  
                </div>
        
           
        </div>
        </section>
        </div>
   
       
    )
}
export default Search;
