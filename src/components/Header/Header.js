import React from "react";

import { NavLink } from "react-router-dom";

import logo from '../../resources/images/generic-logo.png';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className="logo-container">
                <NavLink className="main-logo-nav-link" to="/home">
                    <img className="logo" alt='' src={logo}/>
                </NavLink>
            <span><h6>Community ISD Logo Here</h6></span>
            </div>
            <NavLink activeClassName='active-nav-link' className='navlink' to="/home">HOME</NavLink>
            <NavLink activeClassName='active-nav-link' className='navlink' to="/masterplan">MASTER PLAN</NavLink>
                <div className="school-dropdown">
                    <article className='navlink' to="/assessments">ASSESSMENTS</article>
                        <div className="school-dropdown-menu">
                            <NavLink className='school-link' to="/millsapelementary">ELEMENTARY SCHOOL</NavLink>
                            <NavLink className='school-link' to="/millsapmiddle">MIDDLE SCHOOL</NavLink>
                            <NavLink className='school-link' to="/millsaphighschool">HIGH SCHOOL</NavLink>
                            {/* <NavLink>MILLSAP MIDDLE SCHOOL</NavLink>
                            <NavLink>MILLSAP HIGH SCHOOL</NavLink> */}
                        </div>
                </div>
            <a 
                className='download-button' 
                target='blank'
                href='https://pdfhost.io/v/r4uB9gZDk_Your_Community_ISD_Long_Range_Facilities_Assessment'>DOWNLOAD THE PDF
            </a>
        </div>
    )
}