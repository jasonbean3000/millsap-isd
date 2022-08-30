import React from "react";
import './MillsapElementary.css'
import elementary from '../../resources/images/elementary.jpg'
import { Chart } from "react-google-charts";

const data = [
    ["Element", "Cost Estimate $", { role: "style" }],
    ["Priority 1", 125000, "#B86C7E"], // RGB value
    ["Priority 2", 350000, "#B86C7E"], // English color name
    ["Priority 3", 275000, "#B86C7E"],
    ["Priority 4", 156000, "#B86C7E"], // CSS-style declaration
  ];

export default function MillsapElementary() {
    return (
           <div className="school1">
            <div className="elementary-title">
                <h5>MILLSAP ELEMENTARY</h5>
            </div>
            <div className="pic-content-container">
            
            <div className="elementary-content-container">
                <div className="elementary-content-title">
                    <p>SITE INFORMATION</p>
                </div>
                <div className="site-information">
                    <p>ADDRESS: 101 Wilson Bend Road, Millsap, TX 76066</p>
                    <p>CONSTRUCTED: 1965</p>
                    <p>Building Area: 39,722 SF</p>
                    <p>Site Acreage: 10</p>
                    <p>Capacity: 700</p>
                    <p>Enrollment: 404</p>
                </div>
            </div>
            <div className="pic-container">
                <div className="school-pic">
                    <img alt='' src={elementary} />
                </div>
            </div>
            </div>
            
            <br></br>
            <h4>PROJECT TOTAL BY PRIORITY</h4>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
            
        </div>
    )
}