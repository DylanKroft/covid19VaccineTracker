(this.webpackJsonpvaxtrax=this.webpackJsonpvaxtrax||[]).push([[0],{81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var i,c=n(0),r=n(2),s=n.n(r),o=n(43),a=n.n(o),d=(n(81),n(30)),l=(n(82),n(83),n(94)),j=n(46),p=n(18),h=window.screen.width,b=window.screen.height;function u(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}document.documentElement.style.setProperty("--height",b+"px"),document.documentElement.style.setProperty("--width",h+"px");var m=j.a().domain([0,.5,1,3,5,10,30,100]).range(["#E3EEF6","#AAD0EA","#72B2DE","#3994D1","#0076C5","#006DBE","#0064B7","#005AAF"]),O=function(e){var t=e.setTooltipContent,n=(e.setSelectedCountry,e.selectedCountry,Object(r.useState)([])),s=Object(d.a)(n,2),o=s[0],a=s[1];return Object(r.useEffect)((function(){Object(l.a)("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv").then((function(e){a(e);var t=e.slice().reverse().find((function(e){return"OWID_WRL"===e.iso_code}));i=t.people_vaccinated_per_hundred,document.documentElement.style.setProperty("--totVaxed",i+"%"),document.getElementById("percentage").innerHTML=i}))}),[]),Object(c.jsxs)("div",{id:"mainContainer",children:[Object(c.jsxs)("div",{id:"top",children:[Object(c.jsx)("h1",{id:"title",children:"COVID-19 Vaccination Tracker"}),Object(c.jsxs)("div",{id:"progressBarContainer",children:[Object(c.jsx)("div",{id:"progressBar"}),Object(c.jsxs)("div",{id:"popVaxContainer",children:[Object(c.jsx)("div",{id:"percentage",children:" "}),"% of the world has received at least one dose"]})]})]}),Object(c.jsxs)("div",{id:"mapOuter",children:[Object(c.jsx)("div",{id:"leftBuffer"}),Object(c.jsxs)("div",{id:"mapContainer",children:[Object(c.jsx)(p.ComposableMap,{width:"1200",style:{width:"100%"},"data-tip":"",projection:"geoNaturalEarth1",projectionConfig:{scale:200},id:"map",children:Object(c.jsx)(p.ZoomableGroup,{center:[15,0],zoom:1,translateExtent:[[0,0],[1250,b]],children:Object(c.jsx)(p.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",children:function(e){return e.geographies.map((function(e){if("ATA"===e.properties.ISO_A3)return null;var n=o.slice().reverse().find((function(t){return t.iso_code===e.properties.ISO_A3}));return void 0===n?Object(c.jsx)(p.Geography,{onMouseEnter:function(){var n=e.properties.NAME;t("<b>".concat(n,"<b> <br/><br/> No Data"))},onMouseLeave:function(){t("")},geography:e,fill:"#F8F8F8",style:{default:{stroke:"#B8B8B8",strokeWidth:.75,outline:"none"},hover:{stroke:"#404040",strokeWidth:2,outline:"none"},pressed:{stroke:"#404040",strokeWidth:2,outline:"none"}}},e.rsmKey):Object(c.jsx)(p.Geography,{onMouseEnter:function(){var i=e.properties.NAME;t('\n                          <span id="countryName">'.concat(i,'</span> <br/><br/> \n                          <span id="l1">').concat(n.people_vaccinated_per_hundred,'%</span> <span id="l2">received at least one dose</span> <br/>\n                          <span id="l3">').concat(u(n.daily_vaccinations),'</span> doses administered daily* <br/>\n                          <span id="l4">').concat(u(n.total_vaccinations),'</span> doses administered in total<br/>\n                          <span id="l5"><br/>Last updated ').concat(n.date," <br/> *Rolling 7-day average</span>\n                            "))},onMouseLeave:function(){t("")},geography:e,fill:m(n.people_vaccinated_per_hundred),style:{default:{stroke:"#505050",strokeWidth:.75,outline:"none"},hover:{stroke:"#404040",strokeWidth:2,outline:"none"},pressed:{stroke:"#404040",strokeWidth:2,outline:"none"}}},e.rsmKey)}))}})})}),Object(c.jsxs)("ul",{id:"key",children:[Object(c.jsx)("li",{class:"myli",id:"k1",children:Object(c.jsx)("p",{children:"0"})}),Object(c.jsx)("li",{class:"myli",id:"k2",children:Object(c.jsx)("p",{children:".5"})}),Object(c.jsx)("li",{class:"myli",id:"k3",children:Object(c.jsx)("p",{children:"1"})}),Object(c.jsx)("li",{class:"myli",id:"k4",children:Object(c.jsx)("p",{children:"3"})}),Object(c.jsx)("li",{class:"myli",id:"k5",children:Object(c.jsx)("p",{children:"5"})}),Object(c.jsx)("li",{class:"myli",id:"k6",children:Object(c.jsx)("p",{children:"10"})}),Object(c.jsx)("li",{class:"myli",id:"k7",children:Object(c.jsx)("p",{children:"30"})}),Object(c.jsx)("li",{class:"myli",id:"k8",children:Object(c.jsx)("p",{children:"100"})}),Object(c.jsx)("li",{id:"k9",children:Object(c.jsx)("p",{id:"buffer2",children:"%"})})]})]}),Object(c.jsx)("div",{id:"rightBuffer"})]}),Object(c.jsx)("div",{id:"bottom",children:Object(c.jsxs)("div",{id:"bottomBar",children:[Object(c.jsx)("a",{href:"https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv",class:"bottomInfo",children:"Data Source"}),Object(c.jsx)("a",{href:"https://github.com/DylanKroft/covid19VaccineTracker",class:"bottomInfo",children:"Project Code"}),Object(c.jsx)("a",{href:"dylankroft.com",class:"bottomInfo",children:"Website"}),Object(c.jsx)("a",{href:"https://www.buymeacoffee.com/dylankroft",class:"bottomInfo",children:"Support"})]})})]})},x=n(47);var f=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{setTooltipContent:i}),Object(c.jsx)(x.a,{arrowColor:"transparent",html:!0,class:"tooltip-custom",children:n})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),v()}},[[90,1,2]]]);
//# sourceMappingURL=main.8651eca5.chunk.js.map