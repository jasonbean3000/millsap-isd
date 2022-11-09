import React from "react";
import './MillsapElementary.css'
import elementary from '../../resources/images/elementary.jpg'
import { Chart } from "react-google-charts";
import ElementarySchoolMap from "./ElementarySchoolMap";

const columnChartData = [
    ["Element", "Cost Estimate $", { role: "style" }],
    ["Priority 1", 125000, "#003f5c"], // RGB value
    ["Priority 2", 350000, "#58508d"], // English color name
    ["Priority 3", 275000, "#bc5090"],
    ["Priority 4", 156000, "#ff6361"], // CSS-style declaration
  ];

const columnChartOptions = {
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
    colors: [ 
        "#003f5c", 
        "#004769",
        "#002D42", 
        "#0073A8", 
        "#009FE8"
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
                <h1>EXAMPLE ELEMENTARY SCHOOL</h1>
            </div>
            <div className="pic-content-container">
                <div className="elementary-content-container">
                    <div className="elementary-content-title">
                        <p><span>SITE INFORMATION</span></p>
                    </div>
                    <div className="site-information">
                        <p><span>ADDRESS:</span> 555 LOREM IPSUM Road, LOREM, TX 55555</p>
                        <p><span>CONSTRUCTED:</span> 1965</p>
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
            <div className="bingMap">
            <ElementarySchoolMap />    
            
            </div>
            <br></br>
            
            <h4 className="project-by-priorty">ASSESSMENT TOTALS BY PRIORITY ($ DOLLARS)</h4>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={columnChartData} options={columnChartOptions}/>
            <br></br>
            <br></br>
            <h4 className="project-by-discipline">ASSESSMENT TOTALS BY DISCIPLINE ($ DOLLARS)</h4>
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