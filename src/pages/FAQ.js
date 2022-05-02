import React from 'react';
import "./FAQ.css";

//images
import flyerImage5 from "../images/flyerImage5.png"
function FAQ() {
  return (
    <div className='faq-container'>
      <div className='faq-title-container'>
           <h1><span><img src={flyerImage5} alt="image1" className='faq-image-1'/></span>Frequently Asked Questions </h1>
      </div>
      <div className='question-container'>
        <p className='ques'>
          “Should I recycle my bottle filled with juice?” 
        </p>
        <p className='ans'>
        According to the DSNY it is not considered recyclable if there are still remnants of liquid inside the bottle.
        </p>
      </div>

      <div className='question-container'>
        <p className='ques'>
          “Why is recycling important?”
        </p>
        <p className='ans'>
          Recycling is important because if one container is contaminated … then the whole bag is considered contaminated.
        </p>
      </div>

      <div className='question-container'>
        <p className='ques'>
          "Should I throw contaminated paper into the paper/ plastic bin?"
        </p>
        <p className='ans'>
          No, if the contents are soiled then you should throw it into the trash bin
        </p>
      </div>

      <div className='question-container'>
        <p className='ques'>
          “Is recycling truly beneficial for the environment?”
        </p>
        <p className='ans'>
          Recycling one ton of office paper can save the energy equivalent of consuming 322 gallons of gasoline. Recycling just one ton of aluminum cans conserves more than 152 million Btu, the equivalent of 1,024 gallons of gasoline or 21 barrels of oil consumed.
        </p>
      </div>

      <div className='question-container'>
        <p className='ques'>
          "What are the most common items that I can put into the recycling bin?"
        </p>
        <p className='ans'>
          Cardboard, Paper, Mail, Beverage cans, Food cans, Glass bottles, Jars (glass and plastic), Jugs, Plastic bottles and caps.
        </p>
      </div>

      <div className='question-container'>
        <p className='ques'>
          "What should I avoid putting into the recycling bin?"
        </p>
        <p className='ans'>
          Generally, plastic bags and wraps, electronics, and textiles cannot go in a curbside recycling bin. Also avoid putting Garden hoses Sewing needles Bowling balls Food or food-soiled paper Propane tanks or cylinders Aerosol cans that aren't empty
        </p>
      </div>

    </div>
  )
}

export default FAQ