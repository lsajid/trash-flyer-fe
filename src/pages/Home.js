import React from 'react';
import "./Home.css";
import recycle from "../images/recycle.png"
function Home() {
  return (
    <div className='home'>
        <p>College campuses are a significant source of solid municipal waste, from containers and paper disposed of by students to cardboard boxes and technology disposed of by staff. As such, in order to reduce its environmental impact, City College needs to continue and focus on a successful solid waste management program.</p>
        <section>
            <img src={recycle} alt="recycle"/>
        </section>
    </div>
  )
}

export default Home