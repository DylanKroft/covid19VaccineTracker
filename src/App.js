import './App.css';
import MapChart from './components/MapChart.js';
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";



function App() {

  const [content, setContent] = useState("");

  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip
        className="b"
        arrowColor="transparent"
        backgroundColor="transparent"
        html={true}
      >{content}</ReactTooltip>
    </div>
  );
}

export default App;
