import React from 'react';  
import { NavLink } from 'react-router-dom';
import './Home.css'
import masterplanbuilding from '../../resources/images/masterplanbuilding.jpg'
   
function Home (){ 
    return (
        <div className='home'>  
            <div className='home-statement'>
                <p>Long Range Facilities Master Plan</p>
            </div>
            <div className='mission-statement'>
                <h2>MILLSAP ISD FORWARD</h2>
                <p>The facility master plan is a roadmap for the long-term stewardship of school facilities in the Twin Rivers Unified School District. Since its creation in 2015, this plan has been updated annually to reflect progress made, realign and reaffirm long-term goals, and to continually identify ways in which our school facilities can best support teaching and learning in the classroom. We are continuously focused on implementing the long-term vision to build and maintain school facilities that support the delivery of high-quality education. Each accomplishment propels us forward in that goal. See where we’ve been, where we are, where we’re going and how we’ll get there.</p>
            </div>
            <div className='master-planning'>
                <h2>MASTER PLANNING</h2>
                <p>The development of a Long-Range Facility Master Plan is a multi-phase initiative that includes an assessment of existing facilities conditions. This encompasses a building by building, system level examination used to determine the current state of all facilities. Click below to learn more about the master planning process.</p>
                <div className='master-plan-description'>
                    
                    <div className='master-plan-description-text'>
                        <h3>
                        THE MILLSAP ISD LONG-RANGE FACILITIES MASTER PLAN IS:
                        </h3>
                        <ul>
                            <li>A ROADMAP FOR FACILITIES DECISIONS, BOTH ON EXISTING AND FUTURE SITES</li>
                            <li>A BUDGETING TOOL FOR THE DISTRICT</li>
                            <li>A LIVING DOCUMENT THAT CAN KEEP VESTED PARTIES UP-TO-DATE</li>
                        </ul>
                    </div>
                </div>
                <NavLink className='navlink-masterplan' to="/masterplan">
                    MASTER PLANNING PROCESS
                </NavLink>
            </div>
        </div>
    )
}  
   
export default Home;  



