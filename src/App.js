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
        arrowColor="transparent"
        html={true}
        class="tooltip-custom"
      >{content}</ReactTooltip>
    </div>
  );
}

export default App;
