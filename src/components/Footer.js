import React from 'react'

const Footer = () => {
    return (
          <div>
            <div className="footer-up">
              <table className="footer-table">
                <tr>
                  <td>
                  <ul>
                  <div><h5>Contact</h5></div>
        
              <li> <h6><i class="fas fa-at"></i> nizaraitbrahim1@gmail.com</h6> </li>
              <li> <h6><i class="far fa-address-card"></i> Rue Jamal Eddine Afghani,Rés, Soukna Mouriha-Tanger</h6> </li>
              <li> <h6><i class="fas fa-mobile-alt"></i> Tel: 05 39 32 41 71</h6> </li>
              <li> <h6><i class="fas fa-phone-square"></i> Fax: 05 39 32 41 71</h6> </li>
            </ul>
                  </td>
                 <td>
                 <ul>
                  <div><h3>Cartes acceptées</h3></div>
              <li>  <img src={require('../images/mc.png').default}/> 
              <img src={require('../images/pp.png').default}/>
              <img src={require('../images/vi.png').default}/>
              <img src={require('../images/cmi.png').default}/>
               </li>
            </ul>
                 </td>
                 <td>
                 <ul>
             
              <li> <a>Destinations</a></li>
              <li> <a>A propos de nous</a></li>
              <li> <a>Nous rejoindre</a></li>
              <li> <a>Conditions Générales d'Utilisation</a></li>

            </ul>
                 </td>
                </tr>
              </table>
           
            </div>
       <div className="footer-down">
        <div className="container">
          <div className="row py-2 d-flex align-items-center">
            <div className="col-md-12 text-center">
          <a href="#"><i className="fab fa-facebook text-white mr-4"></i></a>
          <a href="#"><i className="fab fa-twitter  text-white mr-4"></i></a>
          <a href="#"><i className="fab fa-google-plus-g text-white mr-4"></i></a>
          <a href="#"><i className="fab fa-linkedin-in  text-white mr-4"></i></a>
          <a href="#"><i className="fab fa-intsagram text-white mr-4"></i></a>
            </div>
          </div>
        </div>
      </div>
        

      
        </div>
    )
}

export default Footer
