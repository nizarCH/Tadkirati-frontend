import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
const About = () => {
    return (
        <div>
             <div className="about">
        <h2 data-aos="fade-down">Reserver Vos Tickets!</h2>
      <div className="about_container container">
      <div className="about_wrapper">
      <ul className="about_items">
      <li className="about_item">
        <table>
          <tr>
            <td data-aos="fade-right">
            <img src={require('../images/choisir.png').default}/>
            </td>
            <td>
            <div class="about-body" data-aos="fade-right">
            <h5 class="card-title">1. Choisir</h5>
    <p class="about-text">
    Trouver l’offre qui vous convient.
      </p>
  </div>
              </td>

              <td data-aos="fade-right">
            <img src={require('../images/bus.png').default}/>
            </td>
            <td>
            <div class="about-body" data-aos="fade-right">
            <h5 class="card-title">2. Réserver</h5>
    <p class="about-text">
    Choisissez votre siège, et payer en ligne par votre carte bancaire ou en espèces.
      </p>
  </div>
              </td>

              <td data-aos="fade-right">
            <img src={require('../images/man.png').default}/>
            </td>
            <td>
            <div class="about-body" data-aos="fade-right">
            <h5 class="card-title">3. Embarquer</h5>
    <p class="about-text">
    Trouver l’offre qui vous convient.
      </p>
  </div>
              </td>
          </tr>
        </table>
  
 
      </li>
      </ul>
      </div>
      </div>
      </div>
        </div>
    )
}

export default About
