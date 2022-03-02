import './Events.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faFaucet, faCircleRadiation, faHandFist, faCircleExclamation, faBatteryQuarter, faDoorClosed, faSignOut } from '@fortawesome/free-solid-svg-icons'
import noSignal from './icons8-wi-fi-disconnected-32.png'
import highpressure from './icons8-pressure-50.png'
import {useState} from 'react'
import waterFlow from './icons8-water-60.png'
import batteryLife from './icons8-battery-64.png'
import van from './icons8-breaking-51.png'
import UpSideFlow from './UpSideFlow'



function Events ({upside, waterFlowEvents, upSideEvents, setUpSide, setOpen, setValue, setCountWaterFlow, countWaterFlow}) {
    
    
    const [upSideWarning, setUpSideWarning] = useState(false);
    
    //count how much up side down events
    const upSideCount = upSideEvents.length
    setUpSide(upSideCount)
    //count how much water flow events
    const waterFlowCount = waterFlowEvents.length
    setCountWaterFlow(waterFlowCount);
    
    
    
    
    
    return(
        <div className="list" >
            {upSideWarning && <div style={{width: '100%', height:'100%', background:'transparent',position:'absolute',right:'0',top:'0',zIndex:'5'}}><div className='warning-div'>
                <FontAwesomeIcon className="warning" icon={faTriangleExclamation} size="4x"></FontAwesomeIcon>
                <h1>Warning</h1>
                <button type="button">טיפול</button>
            </div></div>}
            
            <button className="events" value='upSide' onClick={(e)=> {setOpen(false);setValue(upSideEvents)}}>
                <FontAwesomeIcon className="warning" icon={faTriangleExclamation} size="3x"></FontAwesomeIcon>
                <h4>זרימה הפוכה</h4>
                <h4 className="notification">{upside}</h4>
                {/* <div className="dropdownContent">
                {prop.map(({street}) => <a onClick={(e) => setopenFile(true)}> {street}</a>)}
                   
                {mangeFile && <div className="mangeFile"><h1>hello</h1><FontAwesomeIcon onClick={(e) => setopenFile(false)} icon={faSignOut} size="2x"></FontAwesomeIcon></div>}
                </div> */}
                
            </button>
            <button className="events" value="waterFlow" onClick={(e)=> {setOpen(false);setValue(waterFlowEvents)}}>
                <img  src={waterFlow}  style={{height:'40px'}}></img>
                <h4>זרימת מים</h4>
                <h4 className="notification">{countWaterFlow}</h4>
                
            </button>
            <button className="events">
                <img  src={highpressure} style={{height:'40px'}}></img>
                <h4>לחץ בצינור</h4>
                <h4 className="notification">1</h4>
            </button>
            <button className="events">
                <img  src={van} style={{height:'40px'}}></img>
                <h4>ונדליזם</h4>
                <h4 className="notification">1</h4>
            </button>
            <button className="events">
                <img  src={noSignal} style={{height:'40px'}}></img> 
                <h4>ללא אות חיים</h4>
                <h4 className="notification">1</h4>
            </button>
            <button className="events">
                <img  src={batteryLife} style={{height:'40px'}}></img> 
                <h4>סוללה חלשה</h4>
                <h4 className="notification">5</h4>
            </button>
        </div>
    );
}

export default Events;