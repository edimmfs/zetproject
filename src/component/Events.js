import './Events.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faFaucet, faCircleRadiation, faHandFist, faCircleExclamation, faBatteryQuarter, faDoorClosed, faSignOut } from '@fortawesome/free-solid-svg-icons'
import noSignal from './no-signal (1).png'
import highpressure from './high-pressure.png'
import {useState} from 'react'

function Events ({upside, prop, setUpSide}) {
    const countUpSide = prop.length
    setUpSide(countUpSide)
    const [mangeFile, setopen] = useState(false)



    return(
        <div className="list" >
            
            <button className="events">
                <FontAwesomeIcon className="warning" icon={faTriangleExclamation} size="2x"></FontAwesomeIcon>
                <h4>זרימה הפוכה</h4>
                <h4 className="notification">{upside}</h4>
                <div className="dropdownContent">
                {prop.map(({street}) => <a onClick={(e) => setopen(true)}> {street}</a>)}
                   
                {mangeFile && <div className="mangeFile"><h1>hello</h1><FontAwesomeIcon onClick={(e) => setopen(false)} icon={faSignOut} size="2x"></FontAwesomeIcon></div>}
                </div>
            </button>
            <button className="events">
                <FontAwesomeIcon  icon={faFaucet} size="2x"></FontAwesomeIcon>
                <h4>זרימת מים</h4>
                <h4 className="notification">1</h4>
                <div className="dropdownContent">
                   <a>123</a> 
                </div>
            </button>
            <button className="events">
                <img  src={highpressure} style={{height:'35px'}}></img>
                <h4>לחץ בצינור</h4>
                <h4 className="notification">1</h4>
            </button>
            <button className="events">
                <FontAwesomeIcon  icon={faHandFist} size="2x"></FontAwesomeIcon>
                <h4>ונדליזם</h4>
                <h4 className="notification">1</h4>
            </button>
            <button className="events">
                <img  src={noSignal} style={{height:'35px'}}></img> 
                <h4>ללא אות חיים</h4>
                <h4 className="notification">1</h4>
            </button>
            <button className="events">
                <FontAwesomeIcon  icon={faBatteryQuarter} size="2x"></FontAwesomeIcon> 
                <h4>סוללה חלשה</h4>
                <h4 className="notification">5</h4>
            </button>
        </div>
    );
}

export default Events;