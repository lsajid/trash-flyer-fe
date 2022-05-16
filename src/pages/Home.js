import React from "react";
import "./Home.css";
import recycle from "../images/recycle.png";
import img1 from '../imagesSite/img1.png';
import img2 from '../imagesSite/img2.png';
import img3 from '../imagesSite/img3.png';
import img4 from '../imagesSite/img4.png';
import img5 from '../imagesSite/img5.png';
import img6 from '../imagesSite/img6.png';
import img7 from '../imagesSite/img7.png';

function Home() {
  return (
    <div className="home-container">
      <h1>Our Proposition</h1>
      <img src={img1} alt="recycle" />
      <div className="top-text">
        <h3>
          College campuses are a huge source of solid municipal waste.
          From containers and paper disposed of by students to cardboard boxes
          and technology disposed of by staff. In order to reduce its
          environmental impact, it is recommended that CCNY modifies the current process.
        </h3>
      </div>
      <img src={img2} alt="recycle" />
      <img src={img5} alt="recycle" />
      <div className="page-layout">
        <div className="text-container">
          <p>
            The average person in the United States generates almost 5 pounds of solid waste per day 
            (Facts and Figures on Materials, Waste, EPA). 
            By recycling that solid waste back into the initial production of products, the amount of raw material needed in production is reduced, 
            and it also reduces the amount of solid waste that is sent to the landfill.
          </p>
          <br />
          
          <br />
          <p>
            Upon investigation, elevator diagrams were used to obtain a visual representation of trash and 
            recycling bins on each floor within the NAC.
            Within the diagram, each red mark represents a single small trash bin, while blue represents the recycling bins. 
            More black trash bins were observed, as opposed to blue recycling bins. Furthermore, there is an abundance of 
            trash bins outside each classroom that can be found on each floor. Despite these large numbers of trash bins, 
            there is only one recycling station shared throughout the whole floor, instead of having a couple placed strategically 
            around campus. The mapping process and floor plans of the NAC building on the following floors exhibited the same pattern, 
            where despite a large number of trash bins outside each classroom, there is only one recycling station shared among 50 classrooms. 
            These findings proved to be useful when comparing the NAC area to other campus locations. Based on these investigations, 
            it was concluded that each building on campus operates differently and is not managed by a uniform plan. 
          </p>
          <img src={img4} alt="recycle" />
          <br />
          <br />
          <img src={img6} alt="recycle" />
          <p>
            CUNYfirst was used to obtain daily attendance data. The schools database was parsed to obtain the number of 
            students in each fully in-person class, multiplied by the number of times that class met each week. 
            One assumption of the process was that classes listed as in-person on CUNYFirst met fully in person each session. 
            This is not always the case as some classes may opt to have hybrid sessions, leading to an overestimation. However, 
            there was no way to account for visitors who enter the building to use the library, visit a professor, or purchase food in the NAC 
            Rotunda. As such, we will use the assumption that the overestimation accommodates these students who are unaccounted for.
          </p>
          <img src={img7} alt="recycle" />
          <p>
            Faculty was not accounted for in this process, 
            because most professors have their own offices. In the preliminary tour in Fall 2021, 
            it was determined that these offices are fitted with their own small waste bins. 
            As such, professors will not rely on the main bins as much, and their count was not included. 
            The results determined that there are approximately 28,677 students in the NAC each week. 
            This was divided by 5 to obtain the daily number of students in the NAC. The library is open and classes are held on Saturday, 
            but the number of students in the NAC for this is negligible. Conclusively, the daily number of students in the NAC was determined 
            to be approximately 5,736 students.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
