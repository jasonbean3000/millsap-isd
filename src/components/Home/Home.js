import React from 'react';  
import { NavLink } from 'react-router-dom';
import './Home.css'

   
function Home (){ 
    return (
        <div className='home'>  
            <div className='home-statement'>
                <p>Long Range Facilities Master Plan</p>
            </div>
            <div className='mission-statement'>
                <h2>COMMUNITY ISD FORWARD</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere lacus enim, ac vulputate nisl euismod quis. Nullam id molestie metus, non malesuada nunc. Aenean mattis mi et pulvinar gravida. Duis ut convallis elit. Curabitur tincidunt, mauris ac venenatis hendrerit, leo mi ultricies tortor, quis eleifend elit arcu in elit. Praesent gravida tempor tincidunt. Fusce varius nunc nec odio rutrum tristique. Morbi hendrerit scelerisque blandit. Etiam ac justo et ex gravida eleifend. Nam nunc orci, blandit nec velit vel, varius ullamcorper odio. Ut egestas turpis eget dignissim cursus. Aliquam quis nisi risus. Donec ut varius urna. Donec blandit dolor et.</p>
            </div>
            <div className='master-planning'>
                <h2>MASTER PLANNING</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper quis sapien quis dapibus. Proin condimentum, risus vitae semper pretium, risus mi sodales quam, vel pulvinar lacus dolor in purus. Praesent dapibus rutrum urna at vehicula. Quisque efficitur est eget accumsan maximus. Phasellus auctor pulvinar bibendum. Aliquam tempus consequat orci.</p>
                <div className='master-plan-description'>
                    
                    <div className='master-plan-description-text'>
                        <h3>
                        THE COMMUNITY ISD LONG-RANGE FACILITIES MASTER PLAN IS:
                        </h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc nibh.</li>
                            <li>Praesent dapibus rutrum urna at vehicula.</li>
                            <li>Phasellus auctor pulvinar bibendum. Aliquam tempus consequat orci.</li>
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



