import React from "react";
import './MillsapElementary.css'
import elementary from '../../resources/images/elementary.jpg'

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
                    <p>Enrollment: 403</p>
                </div>
            </div>
            <div className="pic-container">
                <div className="school-pic">
                    <img alt='' src={elementary} />
                </div>
            </div>
            </div>
            <div className="chart-container">
            <table id="column-example-12" class="charts-css column show-labels show-primary-axis show-4-secondary-axes">
                <caption> Column Example #12 </caption>
                <thead>
                    <tr><th scope="col"> Year 
                    </th> <th scope="col"> Progress </th>
                    </tr></thead> <tbody><tr><th scope="row"> 2016 </th> <td ></td></tr> <tr><th scope="row"> 2017 </th> <td ></td></tr> <tr><th scope="row"> 2018 </th> <td ></td></tr> <tr><th scope="row"> 2019 </th> <td ></td></tr> <tr><th scope="row"> 2020 </th> <td ></td></tr></tbody></table>
            </div>
            
        </div>
    )
}