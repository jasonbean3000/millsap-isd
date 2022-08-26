import React from "react";
import './MillsapMiddleSchool.css'
import millsapmiddle from '../../resources/images/millsapmiddle.jpg'

export default function MillsapMiddleSchool() {
    return (
        <div className="school2">
            <div className="middle-title">
                <h5>MILLSAP MIDDLE SCHOOL</h5>
            </div>
            <div className="pic-content-container">
            
            <div className="middle-content-container">
                <div className="middle-content-title">
                    <p>SITE INFORMATION</p>
                </div>
                <div className="site-information">
                    <p>ADDRESS: 101 Wilson Bend Road, Millsap, TX 76066</p>
                    <p>CONSTRUCTED: 1965</p>
                    <p>Building Area: 39,722 SF</p>
                    <p>Site Acreage: 10</p>
                    <p>Capacity: 700</p>
                    <p>Enrollment: 403</p>
                </div>
            </div>
            <div className="pic-container">
                <div className="school-pic">
                    <img src={millsapmiddle} />
                </div>
            </div>
            </div>
        </div>
    )
}