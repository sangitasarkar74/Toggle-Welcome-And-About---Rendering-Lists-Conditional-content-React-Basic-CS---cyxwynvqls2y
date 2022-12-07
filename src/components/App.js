import React from "react";
import "../styles/App.css";
import { useState } from "react";

const App = () => {

  const [isAboutVisible, setIsAboutVisible] = useState(true);

  const handleChange = () => {
    setIsAboutVisible(!isAboutVisible)
  }

  return (
    <div id="main">
      {
        isAboutVisible ? <div id="welcome-div">
          <h1>Welcome to Newton School!!</h1>
        </div> :
          <div id="about-div">
            <h1>
              Newton School is a neo-university providing highly immersive tech
              learning to millions of students, to tap into new-age tech
              opportunities.
            </h1>
          </div>

      };


      <button id="toggle" onClick={handleChange}>Toggle</button>
    </div>

  );
};

export default App;
