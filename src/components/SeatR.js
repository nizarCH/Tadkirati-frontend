import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {BrowserRouter as Router, Route,Switch,Link,Redirect,useHistory} from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Aos from "aos"
import "aos/dist/aos.css"
const SeatR = () => {
  const {SeatId}= useParams()
    const infos=SeatId.split('&')
    const dataVille={
      date: infos[0],
      départ: infos[1],
      id:infos[2],
      prix: infos[3],
      nom_fr: infos[4],
      nom_ar: infos[5],
      agence: infos[6],
      psg: infos[7]
    }
    useEffect(() => {
      localStorage.setItem("cart",JSON.stringify(dataVille))
     },[dataVille])

    
    return (
        <div>
          <Navbar/>
          <h1 className="res-place" data-aos="fade-right">Choix de place</h1>
          <br></br>
          <div className="Siege" data-aos="fade-right">
            <span><span className="s-disp">1</span>Siège disponible</span>
            <span><span className="s-nondisp">1</span>Place non disponible</span>
            <span><span className="s-sel">1</span>Siège sélectionné</span>
          </div>
        <div class="plane" data-aos="fade-up">
  <div class="cockpit">
    <h1><i class="fas fa-steering-wheel"></i></h1>
  </div>

  <ol class="cabin fuselage">
    <li class="row row--1">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="1" />
          <label for="1">1</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="2" />
          <label for="2">2</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="3" />
          <label for="3">3</label>
        </li>
        
        <li class="seat">
          <input type="checkbox" disabled id="4" />
          <label for="4">4</label>
        </li>

      </ol>
    </li>
    <li class="row row--2">
      <ol class="seats" type="A">
      <li class="seat">
          <input type="checkbox" disabled id="5" />
          <label for="5">5</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="6" />
          <label for="6">6</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="7" />
          <label for="7">7</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="8" />
          <label for="8">8</label>
        </li>
        
      </ol>
    </li>
    <li class="row row--3">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="9" />
          <label for="9">9</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="10" />
          <label for="10">10</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="11" />
          <label for="11">11</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="12" />
          <label for="12">12</label>
        </li>
        
      </ol>
    </li>
    <li class="row row--4">
      <ol class="seats" type="A">
      <li class="seat">
          <input type="checkbox" id="13" />
          <label for="13">13</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="14" />
          <label for="14">14</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="15" />
          <label for="15">15</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="16" />
          <label for="16">16</label>
        </li>
      </ol>
    </li>

    <li class="row row--5">
    <ol class="seats" type="A" >
    <li class="seat">
          <input type="checkbox" disabled id="17" />
          <label for="17">17</label>
        </li>
    <li class="seat">
          <input type="checkbox" disabled id="18" />
          <label for="18">18</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="19" />
          <label for="19">19</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="20" />
          <label for="20">20</label>
        </li>

        </ol>
    </li>

    <li class="row row--6">

      <ol class="seats" type="A">
      <li class="seat">
          <input type="checkbox" disabled id="21" />
          <label for="21">21</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="22" />
          <label for="22">22</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="23" />
          <label for="23">23</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="24" />
          <label for="24">24</label>
        </li>

      </ol>
    </li>
    <li class="row row--7">
      <ol class="seats" type="A">
      <li class="seat">
          <input type="checkbox" disabled id="25" />
          <label for="25">25</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="26" />
          <label for="26">26</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="27" />
          <label for="27">27</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="28" />
          <label for="28">28</label>
        </li>
        
        
      </ol>
    </li>
    <li class="row row--8">
      <ol class="seats" type="A">
      <li class="seat">
          <input type="checkbox" disabled id="29" />
          <label for="29">29</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="30" />
          <label for="30">30</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="31" />
          <label for="31">31</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="32" />
          <label for="832">32</label>
        </li>
        

      </ol>
    </li>
    <li class="row row--9">
      <ol class="seats" type="A">
      <li class="seat">
          <input type="checkbox" disabled id="33" />
          <label for="33">33</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="34" />
          <label for="34">34</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="35" />
          <label for="35">35</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="36" />
          <label for="36">36</label>
        </li>
       
        
      </ol>
    </li>
    <li class="row row--10">
      <ol class="seats" type="A">
      <li class="seat">
          <input type="checkbox" disabled id="37" />
          <label for="37">37</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="38" />
          <label for="38">38</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="39" />
          <label for="39">39</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="40" />
          <label for="40">40</label>
        </li>

        
      </ol>
    </li>
    <li class="row row--11">
      <ol class="seats" type="A">
      <li class="seat">
          <input type="checkbox" id="41" />
          <label for="41">41</label>
        </li>
      <li class="seat">
          <input type="checkbox" disabled id="42" />
          <label for="42">42</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="43" />
          <label for="43">43</label>
        </li>
        <li class="seat">
          <input type="checkbox" disabled id="44" />
          <label for="44">44</label>
        </li>

      
      </ol>
    </li>
    <li class="row row--12">
      <ol class="seats" type="A">
      <li class="seat">
          <input type="checkbox" id="45" />
          <label for="45">45</label>
        </li>
      <li class="seat">
          <input type="checkbox" disabled id="46" />
          <label for="46">46</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="47" />
          <label for="47">47</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="48" />
          <label for="48">48</label>
        </li>
      </ol>
    </li>

    <li class="row row--13">
      <ol class="seats" type="A">
      <li class="seat">
          <input type="checkbox" id="49" />
          <label for="49">49</label>
        </li>
      <li class="seat">
          <input type="checkbox" id="50" />
          <label for="50">50</label>
        </li>
       
      </ol>
    </li>
  </ol>
</div>
<Link to={`/Réserver/${dataVille.date}&${dataVille.départ}&${dataVille.id}&${dataVille.prix}&${dataVille.nom_fr}&${dataVille.nom_ar}&${dataVille.agence}&${dataVille.psg}`}><button className="comf-res">Confirmer Réservation</button></Link>
       <Footer/>
        </div>
    )
}

export default SeatR
