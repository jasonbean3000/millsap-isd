import React from "react";
import './MillsapMiddleSchool.css'
import millsapmiddle from '../../resources/images/millsapmiddle.jpg'
import { Chart } from "react-google-charts";
import MiddleSchoolMap from "./MiddleSchoolMap";

const columnChartData = [
    ["Element", "Cost Estimate", { role: "style" }],
    ["Priority 1", 250000, "#B86C7E"], // RGB value
    ["Priority 2", 425000, "#784752"], // English color name
    ["Priority 3", 95000, "F792AA"],
    ["Priority 4", 200000, "#DE8398"], // CSS-style declaration
  ];

  const columnChartOptions = {
    legend: 'none'
}

const donutChartData = [
    ["Discipline", "Cost"],
    ["Civil", 1206],
    ["Building Envelope", 4000],
    ["Architectual", 2300],
    ["Mechanical", 6000],
    ["Electrical", 5500],
    ["Plumbing", 10000],
    ["Technology", 6000],
    ["Fire & Life Safety", 2000,],
    ["Security", 15000],
    ["Athletics", 25000],
    ["Nutrition Services", 14000],
    ["Other", 2000],
  ]; 


const donutChartOptions = {
    pieHole: 0.4,
    is3D: false,
    colors: [ "#B86C7E", 
              "#784752", 
              "F792AA", 
              "#3D242A", 
              "#DE8398", 
            ],
    chartArea: {
        width: '60%',
        height: 500,
    },
    fontName: 'Poppins',
    legend: {
        textStyle: {
            fontSize: 20
        },
    position: 'labeled',
    } 

};  

export default function MillsapMiddleSchool() {
    return (
        <div>
        <div className="school2">
            <div className="middle-title">
                <h1>MILLSAP MIDDLE SCHOOL</h1>
            </div>
            <div className="pic-content-container">
            
            <div className="middle-content-container">
                <div className="middle-content-title">
                <p><span>SITE INFORMATION</span></p>
                </div>
                <div className="site-information">
                    <p><span>ADDRESS:</span> 101 Wilson Bend Road, Millsap, TX 76066</p>
                    <p><span>CONSTRUCTED:</span> CONSTRUCTED: 1965</p>
                    <p><span>Building Area:</span> 39,722 SF</p>
                    <p><span>Site Acreage:</span> 10</p>
                    <p><span>Capacity:</span> 700</p>
                    <p><span>Enrollment:</span> 404</p>
                </div>
            </div>
            <div className="pic-container">
                <div className="school-pic">
                    <img alt='' src={millsapmiddle} />
                </div>
            </div>
            </div>
            <div className="bingMap">
            <MiddleSchoolMap />    
            
            </div>
            <br></br>

            <h4 className="project-by-priorty">ASSESSMENT TOTALS BY PRIORITY</h4>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={columnChartData} options={columnChartOptions}/>
            <br></br>
            <br></br>
            <h4 className="project-by-discipline">ASSESSMENT TOTALS BY DISCIPLINE</h4>
        </div>
        <div className="donut-chart">
        
            <Chart 
                chartType="PieChart"
                data={donutChartData}
                options={donutChartOptions}
                width="100%" height="400px"
                />
        </div>
        <br></br>
        </div>
    )
}