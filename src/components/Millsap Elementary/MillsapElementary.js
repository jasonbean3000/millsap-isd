import React from "react";
import './MillsapElementary.css'
import elementary from '../../resources/images/elementary.jpg'
import { Chart } from "react-google-charts";

const columnChartData = [
    ["Element", "Cost Estimate", { role: "style" }],
    ["Priority 1", 125000, "#B86C7E"], // RGB value
    ["Priority 2", 350000, "#784752"], // English color name
    ["Priority 3", 275000, "F792AA"],
    ["Priority 4", 156000, "#DE8398"], // CSS-style declaration
  ];

const columnChartOptoins = {
    legend: 'none'
}

const donutChartData = [
    ["Discipline", "Cost"],
    ["Civil", 1100],
    ["Building Envelope", 2000],
    ["Architectual", 2600],
    ["Mechanical", 2000],
    ["Electrical", 7000],
    ["Plumbing", 1100],
    ["Technology", 2000],
    ["Fire & Life Safety", 2000,],
    ["Security", 2000],
    ["Athletics", 7000],
    ["Nutrition Services", 7000],
    ["Other", 1000],
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

export default function MillsapElementary() {
    return (
        <div>
           <div className="school1">
            <div className="elementary-title">
                <h1>MILLSAP ELEMENTARY SCHOOL</h1>
            </div>
            <div className="pic-content-container">
            
            <div className="elementary-content-container">
                <div className="elementary-content-title">
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
                    <img alt='' src={elementary} />
                </div>
            </div>
            </div>
            
            <br></br>
            
            <h4 className="project-by-priorty">ASSESSMENT TOTALS BY PRIORITY</h4>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={columnChartData} options={columnChartOptoins}/>
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