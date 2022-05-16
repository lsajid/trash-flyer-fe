import React from "react";
import "./Home.css";

import img1 from '../imagesSite/img1.png';
import img2 from '../imagesSite/img2.png';
import img5 from '../imagesSite/img5.png';
import img6 from '../imagesSite/img6.png';
import img7 from '../imagesSite/img7.png';
import img8 from '../imagesSite/img8.png';

import imgUs1 from '../imagesGroup/imgUs1.JPG';
import imgUs3 from '../imagesGroup/imgUs3.jpg';

function Home() {
  return (
    <div className="home-container">
      <h1>Our Proposition</h1>
      <img src={img1} alt="recycle" className="img1" />
      <div className="top-text">
        <h3>
          College campuses are a huge source of solid municipal waste.
          From containers and paper disposed of by students to cardboard boxes
          and technology disposed of by staff. In order to reduce its
          environmental impact, it is recommended that CCNY modifies the current process.
        </h3>
      </div>
      <img src={img2} alt="recycle" className="img2"/>
      <img src={img5} alt="recycle" className="img5"/>
      <div className="page-layout">
        <div className="text-container">
          <div className="low-text">
          <p>
            The average person in the United States generates almost 5 pounds of solid waste per day 
            (Facts and Figures on Materials, Waste, EPA). 
            By recycling that solid waste back into the initial production of products, the amount of raw material needed in production is reduced, 
            and it also reduces the amount of solid waste that is sent to the landfill.
          </p>
          </div>

          <br />
          <img src={imgUs3} alt="recycle" className="img7"/>
          <br />
          <div className="low-text">
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
          </div>

          <img src={img8} alt="recycle" className="img4"/>
          <br />
          <br />
          <img src={img6} alt="recycle" className="img6"/>
          <div className="low-text">
            <p>
              CUNYfirst was used to obtain daily attendance data. The schools database was parsed to obtain the number of 
              students in each fully in-person class, multiplied by the number of times that class met each week. 
              One assumption of the process was that classes listed as in-person on CUNYFirst met fully in person each session. 
              This is not always the case as some classes may opt to have hybrid sessions, leading to an overestimation. However, 
              there was no way to account for visitors who enter the building to use the library, visit a professor, or purchase food in the NAC 
              Rotunda. As such, we will use the assumption that the overestimation accommodates these students who are unaccounted for.
            </p>
          </div>

          <img src={img7} alt="recycle" className="img7"/>
          <div className="low-text">
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
          <div className="low-text">
            <p>
            Given the need to fulfill recycling duties for both legal and environmental purposes, implementing the proposed waste management program will yield substantial benefits for The City College of New York(CCNY). As the student population continues to increase, there will be a point at which the waste management program as it currently stands simply will not be sufficient to manage the volume that flows in and out of campus. A fortified recycling program affords economic gain, as students who feel that their campus is greener will inherently feel more connected to and positive about their school, which has the potential to raise retention rates. Environmentally, maintaining a successful and efficient solid waste management program allows for CCNY to substantially increase their diversion rate, which not only improves the environment of the school, but eliminates the possibility for legal troubles as the school will fulfill its regulatory requirements.
            </p>
          </div>
          <h2>Thank You!</h2>
          <img src={imgUs1} alt="recycle" className="img7"/>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
