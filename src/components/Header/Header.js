import React from "react";

import { NavLink } from "react-router-dom";

import logo from '../../resources/images/logo.png';
import './Header.css';

export default function Header() {
    
    

    return (
        <div id='header-scroll' className='header'>
            <img className="logo" alt='' src={logo} />
            <NavLink activeClassName='active-nav-link' className='navlink' to="/home">HOME</NavLink>
            <NavLink activeClassName='active-nav-link' className='navlink' to="/masterplan">MASTER PLAN</NavLink>
                <div className="school-dropdown">
                    <NavLink activeClassName='active-nav-link' className='navlink' to="/assessments">ASSESSMENTS</NavLink>
                        <div className="school-dropdown-menu">
                            <NavLink className='school-link' to="/millsapelementary">MILLSAP ELEMENTARY</NavLink>
                            <NavLink className='school-link' to="/millsapmiddle">MILLSAP MIDDLE SCHOOL</NavLink>
                            {/* <NavLink>MILLSAP MIDDLE SCHOOL</NavLink>
                            <NavLink>MILLSAP HIGH SCHOOL</NavLink> */}
                        </div>
                </div>
            <a 
                className='download-button' 
                target='blank'
                href='https://static1.squarespace.com/static/610440d901952c568d86bb6a/t/618afa00ec9fc070204abf4b/1636497929366/Executive+Summary.pdf'>DOWNLOAD THE PDF
            </a>
        </div>
    )
}