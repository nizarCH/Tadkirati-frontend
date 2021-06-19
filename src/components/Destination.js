import React from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
const Destination = () => {
  
    return (
        <div>
      <div className="cards ">
        <h2 data-aos="fade-down">Découvrez ces destinations EPIC!</h2>
      <div className="cards_container row ">
      <div className="cards_wrapper ">
      <div className="cards_items ">
      <section className="cards_item col" data-aos="fade-right">
    
  <img src={require('../images/casa.jpg').default}/>
  <div class="card-body ">
    <h5 class="card-title">Hassan Mosque II</h5>
    <p class="card-text">
    La mosquée Hassan-II est une mosquée située à Casablanca. Érigée en partie sur la mer, elle est un complexe religieux et culturel, aménagée sur neuf hectares et comporte une salle de prières, une salle d'ablutions, des bains, une école coranique, une bibliothèque, un musée et une Académie des arts traditionnels.
      </p>
  </div>
      </section>

      <section className="cards_item" data-aos="fade-up">
    
  <img src={require('../images/elfna.jpg').default}/>
  <div class="card-body">
    <h5 class="card-title">Jemaa el-Fna</h5>
    <p class="card-text">
    La place Jemaa el-Fna est une célèbre place publique au sud-ouest de la médina de Marrakech au Maroc. Ce haut-lieu traditionnel, populaire et animé notamment la nuit attire plus d'un million de visiteurs chaque année
      </p>
  </div>
      </section>
      <section className="cards_item" data-aos="fade-left">
    
    <img src={require('../images/hercule.jpg').default}/>
    <div class="card-body">
      <h5 class="card-title">Grottes d'Hercule</h5>
      <p class="card-text">
      Ouvertes au public, les Grottes d'Hercule sont de magnifiques grottes de calcaire auxquelles plusieurs mythes grecques sont associés. ... En effet, selon la mythologie, ce serait en ces lieux que le fils de Poséidon (le cyclope Polyphème) aurait vécu.
        </p>
    </div>
        </section>

      </div>

      </div>
      </div>
      </div>
        </div>
    )
}

export default Destination
