import React from 'react';
import loaderGif from '../images/loading.gif'
import Navbar from '../components/Navbar'
import Aos from "aos"
import "aos/dist/aos.css"
const Loading = () => {
  return (
    <div className="loading-container">
      <Navbar/>
        <div className="loader">
              <img src={loaderGif}/>
              <h1>Loading...</h1>
        </div>
    </div>
  );
};

export default Loading;
