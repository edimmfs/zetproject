import React, {useState} from 'react'
import './upsideFlow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faAddressCard, faAngleDoubleRight, faCalendarDay, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



function UpSideFlow  ({ setOpen,getValue, setCorLocation,setOpenManage}) {
    
    
    
    
    const [eventClicked , setEventClicked] = useState()
    
 

    return (
        <div className="content" >
        
        <div className="closeArrow"><FontAwesomeIcon className="fa-2x" icon={faAngleDoubleRight}  onClick={()=> { setOpen(true)}}></FontAwesomeIcon></div>
        
         {getValue.map(({street,lng,lat,name}) => <div className="events-manage" onClick={(e) => {setCorLocation({lat,lng,name,street})}}><a ><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> {street} <h4 className="events-manage-button" onClick={(e) => setOpenManage(true)}>ניהול</h4></a></div>)}
            
        
        
        
                   
                
    </div>
  )
}



export default UpSideFlow