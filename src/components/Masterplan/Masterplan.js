import React from "react";
import { useState } from "react";
import './Masterplan.css';
import { Collapse } from "react-collapse";
import shield from '../../resources/images/shield.png';
import interiorFinishes from '../../resources/images/interior-walls-windows.jpg'
import security from '../../resources/images/security.jpg'
import exterior from '../../resources/images/exterior-walls-doors.jpg'
import roof from '../../resources/images/roof.jpg'
import hvac from '../../resources/images/hvac.jpg'
import lighting from '../../resources/images/interior-lights.jpg'
import fixedFurnishes from '../../resources/images/fixed-furnishings.jpg'
import ada from '../../resources/images/ADA.jpg'
import landscape from '../../resources/images/landscape.jpg'
import signage from '../../resources/images/signage.jpg'

export default function Masterplan() {

    const [isCivilOpened, setIsCivilOpened] = useState(false);
    const [isBuildingOpened, setIsBuildingOpened] = useState(false);
    const [isArchitectureOpened, setIsArchitectureOpened] = useState(false);
    const [isMechanicalOpened, setIsMechanicalOpened] = useState(false);
    const [isElectricalOpened, setIsElectricalOpened] = useState(false);
    const [isPlumbingOpened, setIsPlumbingOpened] = useState(false);
    const [isTechnologyOpened, setIsTechnologyOpened] = useState(false);
    const [isSafetyOpened, setIsSafetyOpened] = useState(false);
    
    const handleCivilClick = () => {
        setIsCivilOpened(current => !current);
        setIsBuildingOpened(false);
        setIsArchitectureOpened(false);
        setIsMechanicalOpened(false);
        setIsElectricalOpened(false);
        setIsPlumbingOpened(false);
        setIsTechnologyOpened(false);
        setIsSafetyOpened(false);
    }

    const handleBuildingClick = () => {
        setIsBuildingOpened(current => !current);
        setIsCivilOpened(false);
        setIsArchitectureOpened(false);
        setIsMechanicalOpened(false);
        setIsElectricalOpened(false);
        setIsPlumbingOpened(false);
        setIsTechnologyOpened(false);
        setIsSafetyOpened(false);
    };

    const handleArchitectureClick = () => {
        setIsArchitectureOpened(current => !current);
        setIsCivilOpened(false);
        setIsBuildingOpened(false);
        setIsMechanicalOpened(false);
        setIsElectricalOpened(false);
        setIsPlumbingOpened(false);
        setIsTechnologyOpened(false);
        setIsSafetyOpened(false);
    };

    const handleMechanicalClick = () => {
        setIsMechanicalOpened(current => !current);
        setIsCivilOpened(false);
        setIsBuildingOpened(false);
        setIsArchitectureOpened(false);
        setIsElectricalOpened(false);
        setIsPlumbingOpened(false);
        setIsTechnologyOpened(false);
        setIsSafetyOpened(false);
    };

    const handleElectricalClick = () => {
        setIsElectricalOpened(current => !current);
        setIsCivilOpened(false);
        setIsBuildingOpened(false);
        setIsArchitectureOpened(false);
        setIsMechanicalOpened(false);
        setIsPlumbingOpened(false);
        setIsTechnologyOpened(false);
        setIsSafetyOpened(false);
    };

    
    const handlePlumbingClick = () => {
        setIsPlumbingOpened(current => !current);
        setIsCivilOpened(false);
        setIsBuildingOpened(false);
        setIsArchitectureOpened(false);
        setIsMechanicalOpened(false);
        setIsElectricalOpened(false);
        setIsTechnologyOpened(false);
        setIsSafetyOpened(false);
    };

    const handleTechnologyClick = () => {
        setIsTechnologyOpened(current => !current);
        setIsCivilOpened(false);
        setIsBuildingOpened(false);
        setIsArchitectureOpened(false);
        setIsMechanicalOpened(false);
        setIsElectricalOpened(false);
        setIsPlumbingOpened(false);
        setIsSafetyOpened(false);
    };

    const handleSafetyClick = () => {
        setIsSafetyOpened(current => !current);
        setIsCivilOpened(false);
        setIsBuildingOpened(false);
        setIsArchitectureOpened(false);
        setIsMechanicalOpened(false);
        setIsElectricalOpened(false);
        setIsPlumbingOpened(false);
        setIsTechnologyOpened(false);
    };

    const [isPic1, setIsPic1] = useState(true);
    const [isPic2, setIsPic2] = useState(false);
    const [isPic3, setIsPic3] = useState(false);
    const [isPic4, setIsPic4] = useState(false);
    const [isPic5, setIsPic5] = useState(false);
    const [isPic6, setIsPic6] = useState(false);
    const [isPic7, setIsPic7] = useState(false);
    const [isPic8, setIsPic8] = useState(false);
    const [isPic9, setIsPic9] = useState(false);
    const [isPic10, setIsPic10] = useState(false);

    const handlePic1Click = () => {
        setIsPic1(true)
        setIsPic2(false)
        setIsPic3(false)
        setIsPic4(false)
        setIsPic5(false)
        setIsPic6(false)
        setIsPic7(false)
        setIsPic8(false)
        setIsPic9(false)
        setIsPic10(false)
    }

    const handlePic2Click = () => {
        setIsPic1(false)
        setIsPic2(true)
        setIsPic3(false)
        setIsPic4(false)
        setIsPic5(false)
        setIsPic6(false)
        setIsPic7(false)
        setIsPic8(false)
        setIsPic9(false)
        setIsPic10(false)
    }

    const handlePic3Click = () => {
        setIsPic1(false)
        setIsPic2(false)
        setIsPic3(true)
        setIsPic4(false)
        setIsPic5(false)
        setIsPic6(false)
        setIsPic7(false)
        setIsPic8(false)
        setIsPic9(false)
        setIsPic10(false)
    }

    const handlePic4Click = () => {
        setIsPic1(false)
        setIsPic2(false)
        setIsPic3(false)
        setIsPic4(true)
        setIsPic5(false)
        setIsPic6(false)
        setIsPic7(false)
        setIsPic8(false)
        setIsPic9(false)
        setIsPic10(false)
    }

    const handlePic5Click = () => {
        setIsPic1(false)
        setIsPic2(false)
        setIsPic3(false)
        setIsPic4(false)
        setIsPic5(true)
        setIsPic6(false)
        setIsPic7(false)
        setIsPic8(false)
        setIsPic9(false)
        setIsPic10(false)
    }

    const handlePic6Click = () => {
        setIsPic1(false)
        setIsPic2(false)
        setIsPic3(false)
        setIsPic4(false)
        setIsPic5(false)
        setIsPic6(true)
        setIsPic7(false)
        setIsPic8(false)
        setIsPic9(false)
        setIsPic10(false)
    }

    const handlePic7Click = () => {
        setIsPic1(false)
        setIsPic2(false)
        setIsPic3(false)
        setIsPic4(false)
        setIsPic5(false)
        setIsPic6(false)
        setIsPic7(true)
        setIsPic8(false)
        setIsPic9(false)
        setIsPic10(false)
    }

    const handlePic8Click = () => {
        setIsPic1(false)
        setIsPic2(false)
        setIsPic3(false)
        setIsPic4(false)
        setIsPic5(false)
        setIsPic6(false)
        setIsPic7(false)
        setIsPic8(true)
        setIsPic9(false)
        setIsPic10(false)
    }

    const handlePic9Click = () => {
        setIsPic1(false)
        setIsPic2(false)
        setIsPic3(false)
        setIsPic4(false)
        setIsPic5(false)
        setIsPic6(false)
        setIsPic7(false)
        setIsPic8(false)
        setIsPic9(true)
        setIsPic10(false)
    }

    const handlePic10Click = () => {
        setIsPic1(false)
        setIsPic2(false)
        setIsPic3(false)
        setIsPic4(false)
        setIsPic5(false)
        setIsPic6(false)
        setIsPic7(false)
        setIsPic8(false)
        setIsPic9(false)
        setIsPic10(true)
    }

    return (
        <div className="masterplan">
            <div className="master-planning-overview">
                <h2>OVERVIEW</h2>
                <h3>LONG RANGE FACILITIES MASTER PLANNING</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin leo magna, eu feugiat ex malesuada non. Integer at ipsum nec metus efficitur eleifend. Suspendisse blandit lorem eros, non fermentum lectus suscipit a. Maecenas egestas tortor quam, sit amet hendrerit libero gravida pellentesque. In fringilla felis ut justo tincidunt, a placerat risus facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tempor accumsan luctus. Nunc interdum at dolor non pulvinar. Vestibulum laoreet dui nec nulla scelerisque facilisis. Sed tempor dignissim nisl non maximus. Pellentesque est tortor, scelerisque.</p>
            </div>
            <div className="LRFMP-process">
                <img className="shield" alt="" src={shield} />
                <div className="LRFMP-description">
                    <h4>THE LRFMP IS:</h4>
                    <ul className="LRFMP-list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique eu sem sed porttitor. Duis et consectetur nibh. Vivamus volutpat ipsum.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae porta eros, vel commodo augue. Duis eu hendrerit nibh.</li>
                        <li>Morbi eget scelerisque nisi, eget fringilla nisl. Nulla elit.</li>
                        <li>Praesent vel blandit ligula, vel scelerisque mi.</li>
                    </ul>
                </div>
            </div>
            <div className="LRFMP-plan-process">
                <h2>THE MASTER PLAN PROCESS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque est mauris. Aliquam luctus elementum risus ac ultricies. Vestibulum imperdiet eget orci a mattis. Fusce venenatis orci vel facilisis aliquam. Nam maximus, enim vel imperdiet porttitor, tellus purus blandit sem, ac interdum sapien lectus vel urna. Mauris dictum sem nunc, eu condimentum turpis pulvinar eu. Nulla imperdiet convallis condimentum. </p>
                
                <div className="arrows-container">
                    <div className="arrow-1-container">
                        <div className="arrow-1">
                            <h2>1.</h2>
                            <article>Data</article>
                            <article>Collection</article>
                        </div>
                        <div className="arrow-1 arrow-1-overlay"></div>
                    </div>
                    <div className="arrow-2-container">
                        <div className="arrow-2">
                            <h2>2.</h2>
                            <article>Visioning +</article>
                            <article>Educational</article>
                            <article>Framework</article>
                        </div>
                        <div className="arrow-2 arrow-2-overlay"></div>
                    </div>
                    <div className="arrow-3-container">
                        <div className="arrow-3">
                            <h2>3.</h2>
                            <article>Facility</article>
                            <article>Assessments</article>
                        </div>
                        <div className="arrow-3 arrow-3-overlay"></div>
                    </div>
                    <div className="arrow-4-container">
                        <div className="arrow-4">
                            <h2>4.</h2>
                            <article>Master</article>
                            <article>Plan</article>
                            <article>Development</article>
                        </div>
                        <div className="arrow-4 arrow-4-overlay"></div>
                    </div>
                    <div className="arrow-5-container">
                        <div className="arrow-5">
                            <h2>5.</h2>
                            <article>Implementation</article>
                            <article>Plan</article>
                        </div>
                        <div className="arrow-5 arrow-5-overlay"></div>
                    </div>
                </div>
                <div className="community-outreach-arrow">
                    <article>Community Outreach</article>
                </div>
            </div>
            <div className="facility-needs-assessment">
                <h2>FACILITY NEEDS ASSESSMENTS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis pretium lacinia. Nunc vulputate gravida nibh, nec aliquet metus mollis vel. Phasellus egestas dapibus mattis. Donec vehicula lorem a bibendum tincidunt. Mauris faucibus velit sit amet dolor gravida, sit amet. </p>
                <div className="assessment-container">
                    <div className="assessments-needs-list-container">
                        <div className="number-list-container" onClick={handlePic1Click} >
                            <article  className="number">1</article><article>Building Envelope (exterior)</article>
                        </div>
                        <div className="number-list-container" onClick={handlePic2Click}>
                            <article  className="number">2</article><article>Building Envelope (roofs)</article>
                        </div>
                        <div className="number-list-container" onClick={handlePic3Click}>
                            <article  className="number">3</article><article>Mechanical, Electrical, Plumbing</article>
                        </div>
                        <div className="number-list-container" onClick={handlePic4Click} >
                            <article className="number">4</article><article>Interior Finishes </article>
                        </div>
                        <div className="number-list-container" onClick={handlePic5Click}>
                            <article  className="number">5</article><article>Interior Lighting</article>
                        </div>
                        <div className="number-list-container" onClick={handlePic6Click}>
                            <article  className="number">6</article><article>Interior Fixed Furnishing</article>
                        </div>
                        <div className="number-list-container" onClick={handlePic7Click}>
                            <article  className="number">7</article><article>Safety and Security</article>
                        </div>
                        <div className="number-list-container" onClick={handlePic8Click}>
                            <article  className="number">8</article><article>ADA Accessibilty</article>
                        </div>
                        <div className="number-list-container" onClick={handlePic9Click} >
                            <article className="number">9</article><article>Site Landscape, Paving, Drainage</article>
                        </div>
                        <div className="number-list-container" onClick={handlePic10Click}>
                            <article  className="number">10</article><article>Way-Finding and Signage</article>
                        </div>      
                    </div>
                    <div className="large-pics-container">
                        <div style={{display: isPic1 ? 'block' : 'none'}}>
                            <img className="pic-blown-up" src={exterior} alt='' onClick={handlePic2Click} />
                            <h5>Building Envelope (exterior)</h5> 
                        </div>
                        <div style={{display: isPic2 ? 'block' : 'none'}}>
                            <img className="pic-blown-up" src={roof} alt='' onClick={handlePic3Click} />
                            <h5>Building Envelope (roofs)</h5>
                        </div>
                        <div style={{display: isPic3 ? 'block' : 'none'}}>
                            <img className="pic-blown-up" src={hvac} alt='' onClick={handlePic4Click} />
                            <h5>Mechanical, Electrical, Plumbing</h5>
                        </div>
                        <div style={{display: isPic4 ? 'block' : 'none'}}>
                            <img className="pic-blown-up" src={interiorFinishes} alt='' onClick={handlePic5Click} />
                            <h5>Interior Finishes (walls, flooring, ceiling)</h5>
                        </div>
                        <div style={{display: isPic5 ? 'block' : 'none'}}>
                            <img className="pic-blown-up" src={lighting} alt='' onClick={handlePic6Click}/>
                            <h5>Interior Lighting</h5>
                        </div>
                        <div style={{display: isPic6 ? 'block' : 'none'}}>
                            <img className="pic-blown-up" src={fixedFurnishes} alt='' onClick={handlePic7Click} />
                            <h5>Interior Fixed Furnishing</h5>
                        </div>
                        <div style={{display: isPic7 ? 'block' : 'none'}}>
                            <img className="pic-blown-up" src={security} alt='' onClick={handlePic8Click} />
                            <h5>Safety and Security</h5>
                        </div>   
                        <div style={{display: isPic8 ? 'block' : 'none'}}>
                            <img className="pic-blown-up" src={ada} alt='' onClick={handlePic9Click}/>
                            <h5>ADA Accessibilty</h5>
                        </div>
                        <div style={{display: isPic9 ? 'block' : 'none'}}>
                            <img className="pic-blown-up" src={landscape} alt='' onClick={handlePic10Click}/>
                            <h5>Site Landscape, Paving, Drainage</h5>
                        </div>
                        <div style={{display: isPic10 ? 'block' : 'none'}}>
                            <img className="pic-blown-up" src={signage} alt='' onClick={handlePic1Click}/>
                            <h5>Way-Finding and Signage</h5>
                        </div>          
                    </div>          
                </div>
            </div>
            <div className="assessment-dropdown">
                <div className="assessment-dropdown-list">
                    <p className="civil" onClick={handleCivilClick}>CIVIL</p>
                    <Collapse isOpened={isCivilOpened ? true : false}>
                        <p className="drop-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum sit amet elit finibus porta a vitae mauris. Phasellus et risus scelerisque nibh imperdiet varius id et sapien. Fusce vitae sodales mi. Cras in mollis purus. In hac habitasse platea dictumst. Duis pellentesque efficitur velit, ut ullamcorper velit ullamcorper vehicula. Ut sagittis, massa ut tincidunt feugiat, purus arcu hendrerit risus, sit amet rhoncus diam metus scelerisque est. Aliquam cursus turpis sed felis semper, at aliquet nibh posuere. Vestibulum nisl nisi, ultricies eu turpis at, malesuada fringilla purus. Sed sollicitudin posuere libero, eget convallis ligula egestas auctor. Duis nec porttitor:</p>
                            <ul className="drop-container">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Morbi porttitor arcu quis neque vestibulum, sit amet congue dui sagittis. </li>
                                <li>Sed porttitor, augue quis malesuada vehicula, odio erat commodo libero, eget molestie magna dolor at risus.</li>
                                <li>Suspendisse viverra sapien mauris, ut efficitur dolor tincidunt id.</li>
                                <li>Fusce ullamcorper, ipsum eget vulputate vestibulum, justo urna interdum augue, id interdum arcu sem at turpis.</li>
                                <li>Praesent ex ligula, fermentum vitae dolor in, ultrices posuere nisl.</li>
                                <li>Donec non efficitur elit, ultrices finibus erat.</li>
                                <li>tiam fringilla imperdiet elit, a facilisis felis efficitur id.</li>
                            </ul>
                    </Collapse>
                    <br></br>
                    <p className="building-envelope" onClick={handleBuildingClick}>BUILDING ENVELOPE</p>
                    <Collapse isOpened={isBuildingOpened ? true : false}>
                        <p className="drop-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum sit amet elit finibus porta a vitae mauris. Phasellus et risus scelerisque nibh imperdiet varius id et sapien. Fusce vitae sodales mi. Cras in mollis purus. In hac habitasse platea dictumst. Duis pellentesque efficitur velit, ut ullamcorper velit ullamcorper vehicula. Ut sagittis, massa ut tincidunt feugiat, purus arcu hendrerit risus, sit amet rhoncus diam metus scelerisque est. Aliquam cursus turpis sed felis semper, at aliquet nibh posuere. Vestibulum nisl nisi, ultricies eu turpis at, malesuada fringilla purus. Sed sollicitudin posuere libero, eget convallis ligula egestas auctor. Duis nec porttitor:</p>
                            <ul className="drop-container">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Morbi porttitor arcu quis neque vestibulum, sit amet congue dui sagittis. </li>
                                <li>Sed porttitor, augue quis malesuada vehicula, odio erat commodo libero, eget molestie magna dolor at risus.</li>
                                <li>Suspendisse viverra sapien mauris, ut efficitur dolor tincidunt id.</li>
                                <li>Fusce ullamcorper, ipsum eget vulputate vestibulum, justo urna interdum augue, id interdum arcu sem at turpis.</li>
                                <li>Praesent ex ligula, fermentum vitae dolor in, ultrices posuere nisl.</li>
                                <li>Donec non efficitur elit, ultrices finibus erat.</li>
                                <li>tiam fringilla imperdiet elit, a facilisis felis efficitur id.</li>
                        </ul>
                    </Collapse>  
                    <br></br>  
                    <p className="architecture" onClick={handleArchitectureClick}>ARCHITECTURE</p>
                    <Collapse isOpened={isArchitectureOpened ? true : false}> 
                        <p className="drop-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum sit amet elit finibus porta a vitae mauris. Phasellus et risus scelerisque nibh imperdiet varius id et sapien. Fusce vitae sodales mi. Cras in mollis purus. In hac habitasse platea dictumst. Duis pellentesque efficitur velit, ut ullamcorper velit ullamcorper vehicula. Ut sagittis, massa ut tincidunt feugiat, purus arcu hendrerit risus, sit amet rhoncus diam metus scelerisque est. Aliquam cursus turpis sed felis semper, at aliquet nibh posuere. Vestibulum nisl nisi, ultricies eu turpis at, malesuada fringilla purus. Sed sollicitudin posuere libero, eget convallis ligula egestas auctor. Duis nec porttitor:</p>
                            <ul className="drop-container">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Morbi porttitor arcu quis neque vestibulum, sit amet congue dui sagittis. </li>
                                <li>Sed porttitor, augue quis malesuada vehicula, odio erat commodo libero, eget molestie magna dolor at risus.</li>
                                <li>Suspendisse viverra sapien mauris, ut efficitur dolor tincidunt id.</li>
                                <li>Fusce ullamcorper, ipsum eget vulputate vestibulum, justo urna interdum augue, id interdum arcu sem at turpis.</li>
                                <li>Praesent ex ligula, fermentum vitae dolor in, ultrices posuere nisl.</li>
                                <li>Donec non efficitur elit, ultrices finibus erat.</li>
                                <li>tiam fringilla imperdiet elit, a facilisis felis efficitur id.</li>
                            </ul>
                    </Collapse> 
                    <br></br>      
                    <p className="mechanical" onClick={handleMechanicalClick}>MECHANICAL</p>
                    <Collapse isOpened={isMechanicalOpened ? true : false}>
                        <p className="drop-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum sit amet elit finibus porta a vitae mauris. Phasellus et risus scelerisque nibh imperdiet varius id et sapien. Fusce vitae sodales mi. Cras in mollis purus. In hac habitasse platea dictumst. Duis pellentesque efficitur velit, ut ullamcorper velit ullamcorper vehicula. Ut sagittis, massa ut tincidunt feugiat, purus arcu hendrerit risus, sit amet rhoncus diam metus scelerisque est. Aliquam cursus turpis sed felis semper, at aliquet nibh posuere. Vestibulum nisl nisi, ultricies eu turpis at, malesuada fringilla purus. Sed sollicitudin posuere libero, eget convallis ligula egestas auctor. Duis nec porttitor:</p>
                            <ul className="drop-container">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Morbi porttitor arcu quis neque vestibulum, sit amet congue dui sagittis. </li>
                                <li>Sed porttitor, augue quis malesuada vehicula, odio erat commodo libero, eget molestie magna dolor at risus.</li>
                                <li>Suspendisse viverra sapien mauris, ut efficitur dolor tincidunt id.</li>
                                <li>Fusce ullamcorper, ipsum eget vulputate vestibulum, justo urna interdum augue, id interdum arcu sem at turpis.</li>
                                <li>Praesent ex ligula, fermentum vitae dolor in, ultrices posuere nisl.</li>
                                <li>Donec non efficitur elit, ultrices finibus erat.</li>
                                <li>tiam fringilla imperdiet elit, a facilisis felis efficitur id.</li>
                            </ul>
                    </Collapse>
                    <br></br>
                    <p className="electrical" onClick={handleElectricalClick}>ELECTRICAL</p>
                    <Collapse isOpened={isElectricalOpened ? true : false}>
                        <p className="drop-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum sit amet elit finibus porta a vitae mauris. Phasellus et risus scelerisque nibh imperdiet varius id et sapien. Fusce vitae sodales mi. Cras in mollis purus. In hac habitasse platea dictumst. Duis pellentesque efficitur velit, ut ullamcorper velit ullamcorper vehicula. Ut sagittis, massa ut tincidunt feugiat, purus arcu hendrerit risus, sit amet rhoncus diam metus scelerisque est. Aliquam cursus turpis sed felis semper, at aliquet nibh posuere. Vestibulum nisl nisi, ultricies eu turpis at, malesuada fringilla purus. Sed sollicitudin posuere libero, eget convallis ligula egestas auctor. Duis nec porttitor:</p>
                            <ul className="drop-container">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Morbi porttitor arcu quis neque vestibulum, sit amet congue dui sagittis. </li>
                                <li>Sed porttitor, augue quis malesuada vehicula, odio erat commodo libero, eget molestie magna dolor at risus.</li>
                                <li>Suspendisse viverra sapien mauris, ut efficitur dolor tincidunt id.</li>
                                <li>Fusce ullamcorper, ipsum eget vulputate vestibulum, justo urna interdum augue, id interdum arcu sem at turpis.</li>
                                <li>Praesent ex ligula, fermentum vitae dolor in, ultrices posuere nisl.</li>
                                <li>Donec non efficitur elit, ultrices finibus erat.</li>
                                <li>tiam fringilla imperdiet elit, a facilisis felis efficitur id.</li>
                            </ul>
                    </Collapse>
                    <br></br>
                    <p className="plumbing" onClick={handlePlumbingClick}>PLUMBING</p>
                    <Collapse isOpened={isPlumbingOpened ? true : false}>
                        <p className="drop-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum sit amet elit finibus porta a vitae mauris. Phasellus et risus scelerisque nibh imperdiet varius id et sapien. Fusce vitae sodales mi. Cras in mollis purus. In hac habitasse platea dictumst. Duis pellentesque efficitur velit, ut ullamcorper velit ullamcorper vehicula. Ut sagittis, massa ut tincidunt feugiat, purus arcu hendrerit risus, sit amet rhoncus diam metus scelerisque est. Aliquam cursus turpis sed felis semper, at aliquet nibh posuere. Vestibulum nisl nisi, ultricies eu turpis at, malesuada fringilla purus. Sed sollicitudin posuere libero, eget convallis ligula egestas auctor. Duis nec porttitor:</p>
                            <ul className="drop-container">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Morbi porttitor arcu quis neque vestibulum, sit amet congue dui sagittis. </li>
                                <li>Sed porttitor, augue quis malesuada vehicula, odio erat commodo libero, eget molestie magna dolor at risus.</li>
                                <li>Suspendisse viverra sapien mauris, ut efficitur dolor tincidunt id.</li>
                                <li>Fusce ullamcorper, ipsum eget vulputate vestibulum, justo urna interdum augue, id interdum arcu sem at turpis.</li>
                                <li>Praesent ex ligula, fermentum vitae dolor in, ultrices posuere nisl.</li>
                                <li>Donec non efficitur elit, ultrices finibus erat.</li>
                                <li>tiam fringilla imperdiet elit, a facilisis felis efficitur id.</li>
                            </ul>
                    </Collapse>
                    <br></br>     
                    <p className="technology" onClick={handleTechnologyClick}>TECHNOLOGY</p>
                    <Collapse isOpened={isTechnologyOpened ? true : false}>   
                        <p className="drop-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum sit amet elit finibus porta a vitae mauris. Phasellus et risus scelerisque nibh imperdiet varius id et sapien. Fusce vitae sodales mi. Cras in mollis purus. In hac habitasse platea dictumst. Duis pellentesque efficitur velit, ut ullamcorper velit ullamcorper vehicula. Ut sagittis, massa ut tincidunt feugiat, purus arcu hendrerit risus, sit amet rhoncus diam metus scelerisque est. Aliquam cursus turpis sed felis semper, at aliquet nibh posuere. Vestibulum nisl nisi, ultricies eu turpis at, malesuada fringilla purus. Sed sollicitudin posuere libero, eget convallis ligula egestas auctor. Duis nec porttitor:</p>
                            <ul className="drop-container">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Morbi porttitor arcu quis neque vestibulum, sit amet congue dui sagittis. </li>
                                <li>Sed porttitor, augue quis malesuada vehicula, odio erat commodo libero, eget molestie magna dolor at risus.</li>
                                <li>Suspendisse viverra sapien mauris, ut efficitur dolor tincidunt id.</li>
                                <li>Fusce ullamcorper, ipsum eget vulputate vestibulum, justo urna interdum augue, id interdum arcu sem at turpis.</li>
                                <li>Praesent ex ligula, fermentum vitae dolor in, ultrices posuere nisl.</li>
                                <li>Donec non efficitur elit, ultrices finibus erat.</li>
                                <li>tiam fringilla imperdiet elit, a facilisis felis efficitur id.</li>
                            </ul>
                    </Collapse>
                    <br></br> 
                    <p className="safety" onClick={handleSafetyClick}>SAFETY AND SECURITY</p>
                    <Collapse isOpened={isSafetyOpened ? true : false}>
                        <p className="drop-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum sit amet elit finibus porta a vitae mauris. Phasellus et risus scelerisque nibh imperdiet varius id et sapien. Fusce vitae sodales mi. Cras in mollis purus. In hac habitasse platea dictumst. Duis pellentesque efficitur velit, ut ullamcorper velit ullamcorper vehicula. Ut sagittis, massa ut tincidunt feugiat, purus arcu hendrerit risus, sit amet rhoncus diam metus scelerisque est. Aliquam cursus turpis sed felis semper, at aliquet nibh posuere. Vestibulum nisl nisi, ultricies eu turpis at, malesuada fringilla purus. Sed sollicitudin posuere libero, eget convallis ligula egestas auctor. Duis nec porttitor:</p>
                            <ul className="drop-container">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Morbi porttitor arcu quis neque vestibulum, sit amet congue dui sagittis. </li>
                                <li>Sed porttitor, augue quis malesuada vehicula, odio erat commodo libero, eget molestie magna dolor at risus.</li>
                                <li>Suspendisse viverra sapien mauris, ut efficitur dolor tincidunt id.</li>
                                <li>Fusce ullamcorper, ipsum eget vulputate vestibulum, justo urna interdum augue, id interdum arcu sem at turpis.</li>
                                <li>Praesent ex ligula, fermentum vitae dolor in, ultrices posuere nisl.</li>
                                <li>Donec non efficitur elit, ultrices finibus erat.</li>
                                <li>tiam fringilla imperdiet elit, a facilisis felis efficitur id.</li>
                            </ul>
                    </Collapse>
                    <br></br>
                </div>
            </div>
        </div>
        
    )
}