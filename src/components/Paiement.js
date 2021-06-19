import React, { useState, useEffect } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'
import paypal from '../images/pp.png'
import emailjs from 'emailjs-com'
import { useRef } from 'react';
const Paiement = ({total,display,setDisplay,dataVille,user,setUserRes,setComplet}) => {
    const handleClose = () => {setDisplay(false);setConfirm(false)}
    const handleShow = () => setDisplay(true);

const [voyage_id, setIdvoyage] = useState(dataVille.id)
const [user_id, setIduser] = useState("")
const [nombre_de_passagers, setPsg] = useState(dataVille.psg)
const [date_reservation, setDate] = useState(dataVille.date)
const [Confirm, setConfirm] = useState(false)
const [Card, setCard] = useState("")
const [Code, setCode] = useState("")
const [Datexp, setDatexp] = useState("")

const ConfirmNon= (e)=>{
    e.preventDefault()
    setConfirm(false)
}

useEffect(()=>{
    setIduser(user.user.id)
},[user_id])


    const sendemail=()=>{
        const Email={
      Destination: dataVille.agence,
       Agence_fr : dataVille.nom_fr,
       Agence_ar :dataVille.nom_ar,
       passagers: dataVille.psg,
        Prix: dataVille.prix*dataVille.psg,
        Date: dataVille.date,
        PrixUn: dataVille.prix,
        nom: user.user.nom,
        prenom: user.user.prenom,
        email: user.user.email,
        Depart: dataVille.départ 
        }
        emailjs.send('gmail','template_2ow9899',Email,'user_J2qecPjPjbUGndlTn6lGd')
        .then((result)=>{
            console.log(result.text);
        })
    }

    const submit=async(e)=>{
        e.preventDefault()
            const response= await fetch('http://localhost:8000/api/reserver',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    voyage_id,
                    user_id,
                    nombre_de_passagers,
                    date_reservation
                }) 
            });

            sendemail();
            handleClose();
            setUserRes(false);
            setComplet(true);
            setConfirm(false);
        } 
        const UserSubmit=(e)=>{
            e.preventDefault()
            setConfirm(true)
        }



    return (
        <div>
            <Modal show={display} onHide={handleClose} className="ModalGuest">
            <Modal.Title>
                Paiement 
            </Modal.Title>
            <i class="fas fa-window-close close-btn"onClick={handleClose}></i>
                <Modal.Body>
                <div className="showguest">
                <div>
                <form onSubmit={UserSubmit} className="payform">
    <label>  <span><img src={paypal}/> </span> <input onChange={(e)=>setCard(e.target.value)} type="text"placeholder="Numero Card" required/></label>      
            <label><i class="fas fa-calendar-day"></i><span> </span><input onChange={(e)=>setDate(e.target.value)} type="Date"  required/></label><br></br>
            <label> <i class="fas fa-pen-square"></i><span> </span><input onChange={(e)=>setCode(e.target.value)} type="text"  placeholder="CV CODE" required /></label>
            <p>A Payer: {total}DH</p>
            <input type="submit" className="btn-confirm"  value="Confimer Paiement"/>
            </form>
        
                </div>
                <div className={Confirm?"confirmpay":"none"}>
        <div className="paysur">Vous êtes sûr du paiement?</div>
        <button role="button" className="btn-confirm" onClick={submit}>Oui</button><button role="button" className="btn-confirm" onClick={()=>ConfirmNon()}>Non</button>
      
    </div>
    </div>
                </Modal.Body>
              
   

      
</Modal>
        
        </div>
          
    )
}

export default Paiement
