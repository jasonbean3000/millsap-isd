import React from "react";
import { useState } from "react";
import './Masterplan.css'
import shield from '../../resources/images/shield.webp'
import masterplanprocess from '../../resources/images/masterplanprocess.jpg'
import masterplanbuilding from '../../resources/images/masterplanbuilding.jpg'


export default function Masterplan() {
    const [isActive, setIsActive] = useState(true);
    const [isBuildingActive, setIsBuildingActive] = useState(true);
    const [isArchitectureActive, setIsArchitectureActive] = useState(true);
    const [isMechanicalActive, setIsMechanicalActive] = useState(true);
    const [isElectricalActive, setIsElectricalActive] = useState(true);
    const [isPlumbingActive, setIsPlumbingActive] = useState(true);
    const [isTechnologyActive, setIsTechnologyActive] = useState(true);
    const [isSafetyActive, setIsSafetyActive] = useState(true);

    const handleClick = () => {
        setIsActive(current => !current);
        setIsBuildingActive(true);
        setIsArchitectureActive(true);
        setIsMechanicalActive(true);
        setIsElectricalActive(true);
        setIsPlumbingActive(true);
        setIsTechnologyActive(true);
        setIsSafetyActive(true);
    };

    const handleBuildingClick = () => {
        setIsBuildingActive(current => !current);
        setIsActive(true);
        setIsArchitectureActive(true);
        setIsMechanicalActive(true);
        setIsElectricalActive(true);
        setIsPlumbingActive(true);
        setIsTechnologyActive(true);
        setIsSafetyActive(true);
    };

    const handleArchitectureClick = () => {
        setIsArchitectureActive(current => !current);
        setIsBuildingActive(true);
        setIsActive(true);
        setIsMechanicalActive(true);
        setIsElectricalActive(true);
        setIsPlumbingActive(true);
        setIsTechnologyActive(true);
        setIsSafetyActive(true);
    };

    const handleMechanicalClick = () => {
        setIsMechanicalActive(current => !current);
        setIsActive(true);
        setIsBuildingActive(true);
        setIsArchitectureActive(true);
        setIsElectricalActive(true);
        setIsPlumbingActive(true);
        setIsTechnologyActive(true);
        setIsSafetyActive(true);
    };

    const handleElectricalClick = () => {
        setIsElectricalActive(current => !current);
        setIsActive(true);
        setIsBuildingActive(true);
        setIsArchitectureActive(true);
        setIsMechanicalActive(true);
        setIsPlumbingActive(true);
        setIsTechnologyActive(true);
        setIsSafetyActive(true);
    };

    const handlePlumbingClick = () => {
        setIsPlumbingActive(current => !current);
        setIsElectricalActive(true);
        setIsActive(true);
        setIsBuildingActive(true);
        setIsArchitectureActive(true);
        setIsMechanicalActive(true);
        setIsElectricalActive(true);
        setIsTechnologyActive(true);
        setIsSafetyActive(true);
    };

    const handleTechnologyClick = () => {
        setIsTechnologyActive(current => !current);
        setIsPlumbingActive(true);
        setIsElectricalActive(true);
        setIsActive(true);
        setIsBuildingActive(true);
        setIsArchitectureActive(true);
        setIsMechanicalActive(true);
        setIsElectricalActive(true);
        setIsPlumbingActive(true);
        setIsSafetyActive(true);
    };

    const handleSafetyClick = () => {
        setIsSafetyActive(current => !current);
        setIsTechnologyActive(current => !current);
        setIsPlumbingActive(true);
        setIsElectricalActive(true);
        setIsActive(true);
        setIsBuildingActive(true);
        setIsArchitectureActive(true);
        setIsMechanicalActive(true);
        setIsElectricalActive(true);
        setIsPlumbingActive(true);
        setIsTechnologyActive(true);
    };

    return (
        <div className="masterplan">
            <div className="master-planning-overview">
                <h2>OVERVIEW</h2>
                <h3>LONG RANGE FACILITIES MASTER PLANNING</h3>
                <p>Twin Rivers Unified School District utilizes the Long Range Facility Master Plan (LRFMP) process to routinely assess each District facility in order to identify immediate and future needs that impact the learning environments at each campus and develop a plan to address them. The District LRFMP was originally developed in 2015. It has been routinely refreshed to reflect changes in external conditions, such as construction costs and funding, as well as District completion of projects. The master plan is a “living document” and is used as a continuous roadmap for long-term stewardship of District facilities.</p>
            </div>
            <div className="LRFMP-process">
                <img className="shield" alt="" src={shield} />
                <div className="LRFMP-description">
                    <h4>THE LRFMP IS:</h4>
                    <ul className="LRFMP-list">
                        <li>A roadmap forward forming guidelines for facilities decisions both on existing and future sites including schools, support centers, and undeveloped parcels</li>
                        <li>A 25 year vision for TRUSD facilities future</li>
                        <li>A District-wide facilities perspective taking into consideration instructional, technological, demographic, and facility upkeep goals in consideration of buildings, grounds, technology, furniture, and equipment</li>
                        <li>A budgeting tool for facility improvement related decisions</li>
                        <li>Easy to edit, adapt, and change</li>
                    </ul>
                </div>
            </div>
            <div className="LRFMP-plan-process">
                <h2>THE MASTER PLAN PROCESS</h2>
                <p>The development of a Long-Range Facility Master Plan is a multi-phase initiative which includes a review of documentation and records related to existing campuses as well as historical construction and modernization efforts to date; a physical assessment of existing conditions; current space utilization; capacity, enrollment history, and future projections; a thorough understanding of educational programs and program-related needs from a District, site and community perspective; as well as current and future grade-specific and site-specific needs. </p>
                <img alt='' src={masterplanprocess} />
            </div>
            <div className="facility-needs-assessment">
                <h2>FACILITY NEEDS ASSESSMENTS</h2>
                <p>Facility condition assessments were conducted by a multi-disciplinary team of architects, engineers and consultants. The physical site walks encompassed a building-by-building system examination of existing conditions on the school site. This includes interiors, exteriors, mechanical, electrical, plumbing, technology and site / civil elements of each campus. </p>
                <img alt="" className='master-plan-building' src={masterplanbuilding} />
            </div>
            
            <div className="assessment-dropdown">
                <div className="assessment-dropdown-list">
                    <p className="civil" onClick={handleClick}>CIVIL</p>
                        <div style={{
                            display: isActive ? 'none': '',
                        }}>
                            <p className="drop-container">The civil assessment included a walk-thru of each site to observe conditions with regard to drainage and detention, grading, site utilities and paved surfaces. Any observed deficiencies were noted and reviewed with the assessment team and with District representatives to confirm recommendations and timing. The civil consultants looked for observable deficiencies that included but were not limited to the following:</p>
                            <ul className="drop-container">
                                <li>Drainage</li>
                                <li>Driveways</li>
                                <li>Concrete parking areas</li>
                                <li>Asphalt paving</li>
                                <li>Sidewalks</li>
                                <li>Site grading</li>
                                <li>Site utilities (Sanitary Sewer, Storm Drain, Domestic Water and Fire Supply)</li>
                            </ul>
                        </div>
                    <p className="building-envelope" onClick={handleBuildingClick}>BUILDING ENVELOPE</p>
                    
                        <div  style={{
                            display: isBuildingActive ? 'none': '',
                        }}>
                            <p className="drop-container">The basic function of the exterior enclosure of a building is to protect the covered and/or conditioned spaces within from the surrounding external environment. As such, the building envelope assessment involved a visual inspection of the protective systems, structures and materials that make up the exterior envelope of each building to include exterior doors and door openings, windows, skylights, canopies and roofs. During the assessment, the building envelope consultant walked the facility inside and out to observe and document existing conditions and provide prioritized recommendations based on any needs identified. The consultant looked for observable deficiencies that may have included but were not limited to the following:</p>
                            <ul className="drop-container">
                                <li>Visible damage, deterioration, and/or exposure with regard to roofs and/or exterior windows, doors, masonry, painted surfaces, etc.</li>
                                <li>Roof surface areas cluttered with leaves and/or debris</li>
                                <li>Ponding water on roof areas</li>
                                <li>Missing or damaged system components</li>
                                <li>Gutters and/or downspouts improperly anchored to the building; damaged, missing and/or filled with debris</li>
                                <li>Active roof leaks and/or visible water damage on ceilings and/or walls</li>
                                <li>Sloping or sagging ceilings, floors, and/or roofs</li>
                                <li>Foreign substances that could corrode roofing material, sealants, and/or obstruct gutters, drainpipes, air intakes, or exhausts (such as nests or droppings)</li>
                            </ul>
                        </div>
                    <p className="architecture" onClick={handleArchitectureClick}>ARCHITECTURE</p>
                        <div style={{
                            display: isArchitectureActive ? 'none': '',
                        }}>
                        <p className="drop-container">The architectural assessment included a walk-thru of the entire campus to observe interior and exterior building conditions and to identify potential deficiencies with regard to interior finishes and fixtures such as ceilings, flooring, painted surfaces, casework and millwork, doors and door hardware, walls, windows and window coverings, and over-all structural integrity. A welcoming school campus with well-maintained landscaping and great curb appeal can be a source of pride for both a school and the community. Additionally, wise plant selection along with proper irrigation can reduce operating costs while contributing to a sustainable environment. The architects evaluated curb appeal, signage, way-finding, accessibility (in and around buildings, to, from and throughout the site), as well as over-all aesthetics, design, and functionality. The architectural team looked for observable deficiencies related to, but certainly not limited to the following:</p>
                            <ul className="drop-container">
                                <li>General condition of ceilings, walls, and floors (including any areas damaged by water or with visible tears, holes, or cracks)</li>
                                <li>Missing, damaged, stained, and/or loose ceiling, wall and/or floor tile</li>
                                <li>Poorly functioning and/or poorly conditioned doors and/or door hardware; inaccessible door openings;</li>
                                <li>Severe cracks in foundation slab, structural walls, columns, and/or beams</li>
                                <li>Missing and/or damaged posts, beams or supports (including portable building posts/ beams/supports and/or ramps)</li>
                                <li>Damage caused by dry rot or mold in structural components</li>
                                <li>Sloping or sagging ceilings, floors, and/or roofs</li>
                                <li>Leaning and/or bulging walls</li>
                                <li>Poor anchorage of non-structural elements (equipment, casework, book cases, etc.)</li>
                                <li>Safe and welcoming entries; signage (including marquee)</li>
                                <li>Fencing and gates</li>
                                <li>Drop-off / pick-up and circulation</li>
                                <li>Site signage/wayfinding/access</li>
                                <li>Over-all condition of landscaping and grounds</li>
                                <li>Irrigation system condition and functionality</li>
                                <li>Hardcourts and play fields</li>
                            </ul>
                        </div>
                    <p className="mechanical" onClick={handleMechanicalClick}>MECHANICAL</p>
                        <div style={{
                            display: isMechanicalActive ? 'none': '',
                        }}>
                        <p className="drop-container">Properly functioning heating, ventilation, and air conditioning (HVAC) systems are needed to maintain operational facilities with safe, healthy, and comfortable learning environments for both students and staff. HVAC systems are also large consumers of energy and contribute significantly to the total energy usage on school campuses every day. The mechanical assessment focused on the integrity of building HVAC systems and component systems. The consultant looked for observable deficiencies that included but were not limited to the following:</p>
                            <ul className="drop-container">
                                <li>Air conditioning and/or heating systems that are poorly functioning or non-functional</li>
                                <li>Outdated, inefficient, and/or non-functional HVAC system units and/or controls</li>
                                <li>Gaps, holes, or cracks on air intake filters allowing unfiltered air to enter the ventilator</li>
                                <li>Loose filters on the air intake</li>
                                <li>Obstructed ventilation units</li>
                                <li>Damaged or missing vents</li>
                                <li>Vibrating or excessively noisy HVAC units</li>
                                <li>Strong odors near HVAC systems and equipment such as chemical smells, mildew, or trash/debris</li>
                                <li>Dusty or dirty ventilation grills or vents</li>
                                <li>Non-functional specialty fans/hoods</li>
                                <li>Fencing and gates</li>
                                <li>Drop-off / pick-up and circulation</li>
                                <li>Discomfort, stale air and/or stuffiness in a room or space</li>
                                <li>Standing water or condensate in condensate pans</li>
                                <li>Irrigation system condition and functionality</li>
                                <li>Signs of refrigerant leakage</li>
                            </ul>
                        </div>
                    <p className="electrical" onClick={handleElectricalClick}>ELECTRICAL</p>
                        <div style={{
                            display: isElectricalActive ? 'none': '',
                        }}>
                        <p className="drop-container">To help ensure the safety of students and staff and the protection of facility assets, the electrical assessment involved a walk-thru of the entire site to evaluate the integrity of electrical systems and components to include utility service and switchgear; wiring, conduit and distribution; receptacles and appliances; as well as interior and exterior lighting. The consultant looked for observable deficiencies that included but were not limited to the following:</p>
                            <ul className="drop-container">
                                <li>Inadequate power supply and/or distribution</li>
                                <li>Switchboards that are in poor condition, lack space and/or capacity</li>
                                <li>Improperly mounted, covered or guarded electrical equipment and/or components</li>
                                <li>Blocked electrical panels</li>
                                <li>Exposed wiring or frayed cords</li>
                                <li>Damaged or missing electrical components</li>
                                <li>Outdated, inefficient and/or non-functional lighting fixtures, systems and/or controls</li>
                                <li>Poorly functioning and/or outdated low voltage systems and equipment</li>
                                <li>Damaged or missing light covers or bulbs</li>
                                <li>Improper use of extension cords or surge protectors</li>
                                <li>Improperly located appliances</li>
                                <li>Corrosion of metal system elements exposed to groundwater</li>
                            </ul>
                        </div>
                    <p className="plumbing" onClick={handlePlumbingClick}>PLUMBING</p>
                        <div style={{
                            display: isPlumbingActive ? 'none': '',
                        }}>
                        <p className="drop-container">Properly maintained restrooms and drinking fountains contribute to the health of students and staff and also assist in reducing excessive water consumption. The plumbing assessment included a walk-thru of the entire site to observe the integrity of piping, drainage and distribution systems and related components, with any issues noted and prioritized. The consultant looked for observable deficiencies that included but were not limited to the following:</p>
                            <ul className="drop-container">
                                <li>Outdated, inefficient and/or non-functional fixtures, systems and/or controls</li>
                                <li>Inaccessible sinks/fountains and other fixtures</li>
                                <li>Loose/improperly attached, clogged and/or damaged fixtures</li>
                                <li>Signs of leakage and/or contaminants</li>
                                <li>Dirty or moldy fixtures</li>
                                <li>Improper water pressure</li>
                                <li>Missing restroom partitions and/or stall doors</li>
                                <li>Inoperable or missing exhaust fans</li>
                            </ul>
                        </div>
                        
                    <p className="technology" onClick={handleTechnologyClick}>TECHNOLOGY</p>
                        <div style={{
                            display: isTechnologyActive ? 'none': '',
                        }}>
                        <p className="drop-container">The technology assessment included a walk-thru of each site to observe conditions with regard to a variety of systems and infrastructure including network, Internet, classroom, security and audio visual. Any observed deficiencies were noted, compared to best-practice standards and District standards, discussed with the assessment team and with District representatives to review recommendations and priorities. The technology consultants looked for observable deficiencies related to the following:</p>
                            <ul className="drop-container">
                                <li>Network Systems - data cabling, network switches/routers, phone systems, and wireless network</li>
                                <li>Classroom Systems - classroom multimedia, telephones, peripherals including document cameras and sound reinforcement</li>
                                <li>Internet Systems - routers, firewalls, content filtering and internet connections</li>
                                <li>Data Center - servers, storage, virtualization, backups, disaster recovery and room elements (racks, cooling, power, battery backup, generator, etc.)</li>
                                <li>Wide Area Network - building-to-building connectivity</li>
                                <li>Physical Security Systems - video surveillance cameras, access control components, intrusion, campus entrance/exits</li>
                                <li>Audio Visual Systems - sound systems, bell, clock, public address and board room systems</li>
                                <li>Student Devices - 1:1, BYOD, computer carts, classroom computers, computer labs</li>
                            </ul>
                        </div>
                    <p className="safety" onClick={handleSafetyClick}>SAFETY AND SECURITY</p>
                        <div style={{
                            display: isSafetyActive ? 'none': '',
                        }}>
                        
                        <p className="drop-container">To assist in providing a safe and secure facility for students and staff as well as the protection of facility assets, a safety audit was conducted as a part of the condition assessment. The scope of the audit included a review of site elements such as fencing, security cameras and intercoms; building elements such as access control, resistive glass, and intrusion detection, as well as processes and operational procedures related to safety and security. The security consultant looked for observable deficiencies with regard to a variety of elements and universally adopted best practice standards to include, but not limited to the following:</p>
                            <ul className="drop-container">
                                <li >Daily, on-site law enforcement</li>
                                <li >Comprehensive and integrated Emergency Operations Plan and Administrative Practice Manual in place</li>
                                <li>Ongoing training and drills</li>
                                <li>Secure vestibules with restrictive access</li>
                                <li>Adequate security for portable buildings</li>
                                <li>Card reader access control</li>
                                <li>Door sensors</li>
                                <li>Video intercom system</li>
                                <li>Resistive glass</li>
                                <li>Intrusion detection</li>
                                <li>Lock down / panic buttons</li>
                                <li>Secure pedestrian gates</li>
                                <li>Fencing</li>
                                <li>Site and building signage</li>
                            </ul>
                            
                        </div>
                </div>
            </div>
            
        </div>
    )
}