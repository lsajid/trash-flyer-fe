import React from 'react';
import "./Home.css";
import recycle from "../images/recycle.png";

function Home() {
  return (
    <div className='home-container'>
        <section className='home-image'>
            <p>NYC DSNY Recyle Poster</p>
            <img src={recycle} alt="recycle"/>
        </section>
        <section>
          <p>

          </p>
          <p>

          </p>
        </section>
    </div>
  )
}

export default Home;