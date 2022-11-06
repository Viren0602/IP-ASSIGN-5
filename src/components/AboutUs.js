import "./AboutUs.css"
import "./Navigation"

import React, {useState, useEffect} from 'react';
import { Navigation } from "./Navigation";

function AboutUs() {
  useEffect(()=>{
    setVisible(true);
  })
  const [visible,setVisible] = useState(false);
  return (
        <div className="About">
      <div id="pageTitle">
          <p>TEAM MEMBERS</p>
      </div>
      <div className="columns">
        <div id="team">
          <div>
            <p id="teamTitle">SARVESH CHANDNANI</p>
            <p id="teamPos"></p>
          </div>
          <img className="prof" src="https://th.bing.com/th/id/OIP.AfsVI8RzT5YKJbFfJ4DZ3wAAAA?w=151&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="CEO" />
        </div>
        <div id="team">
          <div>
            <p id="teamTitle">Sahil</p>
            <p id="teamPos"></p>
          </div>
          <img className="prof" src="https://th.bing.com/th/id/OIP.AfsVI8RzT5YKJbFfJ4DZ3wAAAA?w=151&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="CTO" />
        </div>
        <div id="team">
          <div>
            <p id="teamTitle">Aman</p>
            <p id="teamPos"></p>
          </div>
          <img className="prof" src="https://th.bing.com/th/id/OIP.AfsVI8RzT5YKJbFfJ4DZ3wAAAA?w=151&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="CFO" />
        </div>
      </div>
      <div className="columns" id="middleColumn">
        <div id="pageTitle1">
          <p>OUR TEAM</p>
        </div>
        <div id="pageData">
          <p>What does a software team do?
Set and communicate work priorities, updates, and issues that emerge during the development process. Document user stories or requirements for the software project. Maintain and update the product backlog. Maximize the return on investment (ROI) of the software project.</p>
          
        </div>
      </div>
      
      
    </div>
  );
}

export default AboutUs;