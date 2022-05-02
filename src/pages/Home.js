import React from "react";
import "./Home.css";
import recycle from "../images/recycle.png";
function Home() {
  return (
    <div className="home-container">
      <div className="top-text">
        <h2>
          College campuses are a significant source of solid municipal waste,
          from containers and paper disposed of by students to cardboard boxes
          and technology disposed of by staff. As such, in order to reduce its
          environmental impact, City College needs to continue and focus on a
          successful solid waste management program.
        </h2>
      </div>
      <div className="page-layout">
        <div className="image-container">
            <img src={recycle} alt="recycle" />
        </div>

        <div className="text-container">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            dolores quisquam, fuga doloremque alias inventore aspernatur, modi
            molestias impedit aut velit esse totam hic vitae culpa officia
            soluta doloribus quis.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptatibus, alias iusto deleniti iste repellat iure vel voluptatem
            quis dolorem voluptatum, eaque placeat saepe eveniet pariatur quam
            tempore obcaecati expedita.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
