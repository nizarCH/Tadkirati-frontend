import React, { useState, useEffect } from 'react'
import {Modal, Button, Row, Col, Form, ModalTitle} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com'
import paypal from '../images/pp.png'
const PaiementGuest = ({total,displayguest,setDisplayguest,dataVille,dataGuest,setGest,setComplet,guest}) => {
    const handleClose = () => setDisplayguest(false);
    const handleShow = () => setDisplayguest(true);

const [voyage_id, setIdvoyage] = useState("")
const [guest_id, setGuestid] = useState("")
const [nombre_de_passagers, setPsg] = useState("")
const [date_reservation, setDate] = useState("")


const [Confirm, setConfirm] = useState(false)
const [email, setEmail] = useState(dataGuest.email)
const [num_tel, setNumtel] = useState(dataGuest.num_tel)
const [nom, setNom] = useState(dataGuest.nom)
const [prenom, setPrenom] = useState(dataGuest.prenom)
const [Card, setCard] = useState("")
const [Code, setCode] = useState("")
const [Datexp, setDatexp] = useState("")
const [voyages_id, setVoyageid] = useState(dataVille.id)

useEffect(()=>{
    setEmail(dataGuest.email)
    setNumtel(dataGuest.num_tel)
    setNom(dataGuest.nom)
    setPrenom(dataGuest.prenom)
    setVoyageid(dataVille.id)
},[Confirm])

const sendemail=()=>{
    const Email={
  Destination: dataVille.agence,
   Agence_fr : dataVille.nom_fr,
   Agence_ar :dataVille.nom_ar,
   passagers: dataVille.psg,
    Prix: dataVille.prix*dataVille.psg,
    Date: dataVille.date,
    PrixUn: dataVille.prix,
    nom: nom,
    prenom: prenom,
    email: email,
    Depart: dataVille.départ 
    }
    emailjs.send('gmail','template_2ow9899',Email,'user_J2qecPjPjbUGndlTn6lGd')
    .then((result)=>{
        console.log(result.text);
    })
}



const ConfirmNon= ()=>{
    setConfirm(false)
}

const Guest=async(e)=>{
    e.preventDefault()
    const response= await fetch('http://localhost:8000/api/createGuest',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({
            nom,
            prenom,
            num_tel,
            email,
            voyages_id
        }) 
    });
// const content = await response.json();
 
sendemail()
handleClose()
setGest(false)
setComplet(true)
setConfirm(false)
}

const GuestSubmit=(e)=>{
    e.preventDefault()
    setConfirm(true)
}


    return (
        <div>
            <Modal show={displayguest} onHide={handleClose} className="ModalGuest">
            <Modal.Title>
                Paiement Visiteur  
            </Modal.Title>
            <i class="fas fa-window-close close-btn"onClick={handleClose}></i>
                <Modal.Body>
                <div className="showguest">
                <div>
                <form onSubmit={GuestSubmit} className="payform">
    <label>  <span><img src={paypal}/> </span> <input onChange={(e)=>setCard(e.target.value)} type="text"placeholder="Numero Card" required/></label>      
            <label><i class="fas fa-calendar-day"></i><span> </span><input onChange={(e)=>setDate(e.target.value)} type="Date"  required/></label><br></br>
            <label> <i class="fas fa-pen-square"></i><span> </span><input onChange={(e)=>setCode(e.target.value)} type="text"  placeholder="CV CODE" required /></label>
            <p>A Payer: {total}DH</p>
            <input type="submit" className="btn-confirm"  value="Confimer Paiement"/>
            </form>
            
                </div>
                <div className={Confirm?"confirmpay":"none"}>
        <div className="paysur">Vous êtes sûr du paiement?</div>
        <button role="button" className="btn-confirm" onClick={Guest}>Oui</button><button role="button" className="btn-confirm" onClick={()=>ConfirmNon()}>Non</button>
      
    </div>
    </div>
                </Modal.Body>
              
   

      
</Modal>
        
        </div>
        
    )
}

export default PaiementGuest
