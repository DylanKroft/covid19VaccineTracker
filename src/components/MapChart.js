import './MapChart.css';
import React from 'react';
import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import * as d3 from 'd3';
import ReactTooltip from "react-tooltip";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { geoMercator } from 'd3'



let root = document.documentElement;
const width = window.screen.width;
const height = window.screen.height;
const suffix = "px" || '';
let totVaxed;
document.documentElement.style.setProperty(`--height`, height + suffix);
document.documentElement.style.setProperty(`--width`, width + suffix);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const colorScale = d3.scaleLinear()
  .domain([0, 0.5, 1, 3, 5, 10, 30, 100])
  .range(['#E3EEF6', '#AAD0EA', '#72B2DE', '#3994D1', '#0076C5', '#006DBE', '#0064B7', '#005AAF']);

const url = "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv";
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const MapChart = ({
  setTooltipContent,
  setSelectedCountry,
  selectedCountry,
}) => { 

const [data, setData] = useState([]);

  useEffect(() => {
      csv(url).then((data) => {
        setData(data);
        const totVaxedObj = data.slice().reverse().find((s) => s.iso_code === "OWID_WRL");
        totVaxed = totVaxedObj["people_vaccinated_per_hundred"];
        document.documentElement.style.setProperty(`--totVaxed`, totVaxed + "%");
        document.getElementById("percentage").innerHTML = totVaxed

      });
    }, []);

  return (
    <div id="mainContainer">
      <div id="top">
        <h1 id="title">COVID-19 Vaccination Tracker</h1>
        <div id="progressBarContainer">
          <div id="progressBar"></div>
          <div id="popVaxContainer"> 
            <div id="percentage"> </div>
            % of the world has received at least one dose</div>
        </div>
      </div>
      <div id="mapContainer">
        <ComposableMap 
        width="1200" 
        style={{ width: "100%"}} 
        data-tip="" 
        projection ="geoNaturalEarth1"
        projectionConfig={{ scale: 200 }} 
        id="map">
        <ZoomableGroup 
        center = {[15,0]}
          zoom={1}
          translateExtent={[
            [0, 0],
            [1250, height]
          ]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                if (geo.properties.ISO_A3 === "ATA") {
                  return null
                }
                const d = data.slice().reverse().find((s) => s.iso_code === geo.properties.ISO_A3);
                if (d === undefined) {
                  return (
                    <Geography
                      key={geo.rsmKey}
  
                      onMouseEnter={() => {
                        const { NAME, POP_EST } = geo.properties;
                        setTooltipContent(`<b>${NAME}<b> <br/><br/> No Data`);
                      }}
  
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
  
                      geography={geo}
                      fill={"#F8F8F8"}
                      style={{
                        default: {
                          stroke: "#B8B8B8",
                          strokeWidth: 0.75,
                          outline: "none"
                        },
                        hover: {
                          stroke: "#404040",
                          strokeWidth: 2,
                          outline: "none"
                        },
                        pressed: {
                          stroke: "#404040",
                          strokeWidth: 2,
                          outline: "none"
                        }
                      }}
                    />
                  );
                } else {
                  return (
                    <Geography
                      key={geo.rsmKey}
  
                      onMouseEnter={() => {
                        const { NAME, POP_EST } = geo.properties;
                        setTooltipContent(`
                          <span id="countryName">${NAME}</span> <br/><br/> 
                          <span id="l1">${d["people_vaccinated_per_hundred"]}%</span> <span id="l2">received at least one dose</span> <br/>
                          <span id="l3">${numberWithCommas(d["daily_vaccinations"])}</span> doses administered daily* <br/>
                          <span id="l4">${numberWithCommas(d["total_vaccinations"])}</span> doses administered in total<br/>
                          <span id="l5"><br/>Last updated ${d["date"]} <br/> *Rolling 7-day average</span>
                            `);
                      }}
  
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
  
                      geography={geo}
                      fill={colorScale(d["people_vaccinated_per_hundred"])}
                      style={{
                        default: {
                          stroke: "#505050",
                          strokeWidth: 0.75,
                          outline: "none"
                        },
                        hover: {
                          stroke: "#404040",
                          strokeWidth: 2,
                          outline: "none"
                        },
                        pressed: {
                          stroke: "#404040",
                          strokeWidth: 2,
                          outline: "none"
                        }
                      }}
                    />
                  );
                }
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
        <ul id="key">
          <li class="myli" id="k1"><p>0</p></li>
          <li class="myli" id="k2"><p>.5</p></li>
          <li class="myli" id="k3"><p>1</p></li>
          <li class="myli" id="k4"><p>3</p></li>
          <li class="myli" id="k5"><p>5</p></li>
          <li class="myli" id="k6"><p>10</p></li>
          <li class="myli" id="k7"><p>30</p></li>
          <li class="myli" id="k8"><p>100</p></li>
          <li id="k9"><p id="buffer2">%</p></li>

        </ul>
      </div>
      
      <div id="bottom">
        <div id="bottomBar">
          <a href="https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv" class="bottomInfo">Data Source</a>
          <a href="https://github.com/DylanKroft/covid19VaccineTracker" class="bottomInfo">Project Code</a>
          <a href="dylankroft.me" class="bottomInfo">Website</a>
          <p class="bottomInfo">Support</p>
        </div>
      </div>
    </div>
  );
};

export default MapChart;
