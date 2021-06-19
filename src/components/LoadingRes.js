import React from 'react';
import loaderGif from '../images/loading.gif'
import Navbar from '../components/Navbar'
import Aos from "aos"
import "aos/dist/aos.css"

const LoadingRes = () => {
    return (
    <div>
    <div>
<Navbar/>
        <div className="secondpage">
         <div className="Modifier-res"></div>
         <div className="title-voyage-res container"></div>
              <table className="container" >
    <tr>
<td>
        <div className="voyage-res container" >
    <table className="allvoyages-res">
      <thead>
        <tr className="row">
        <td className="transport" >
        </td>
        </tr>
      </thead>
    </table>
    
        </div>

        <div className="voyage-res container font-weight-bold" >
    <table className="allvoyages">
      <thead>
        <tr className="row">
        <td className="transport" >
        </td>
        </tr>
      </thead>
    </table>
    
        </div>


        <div className="voyage-res container font-weight-bold" >
    <table className="allvoyages">
      <thead>
        <tr className="row">
        <td className="transport" >
        </td>
        </tr>
      </thead>
    </table>
    
        </div>



        <div className="voyage-res container font-weight-bold" >
    <table className="allvoyages">
      <thead>
        <tr className="row">
        <td className="transport" >
        </td>
        </tr>
      </thead>
    </table>
    
        </div>


      </td>
     </tr>
      </table>
       </div>
       </div>
    )
        </div>
    )
}

export default LoadingRes
