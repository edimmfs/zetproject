import React , {useState} from 'react'
import {GoogleMap, Marker} from '@react-google-maps/api'
import {defaultTheme} from './Theme';

import pin from './pin.png'
import warningPin from './icons8-location-40.png'
import hydrate  from './Hydrant.png';

const defaultOptions = {
    clickableIcons: false,
    styles: defaultTheme
}



const containerStyle = {
    width:'98%',
    height:'100%',
   
    boxShadow:'-1px -1px -10px white',
    zIndex:'1',
    
    
    
}

const Map = ({upSideCor,waterFlowCor,getCorLocation,setCorLocation}) =>{
    
    const eventClicked = {lat:getCorLocation.lat,lng:getCorLocation.lng}
    
    
    

    

    const handleClick = (lat,lng) => { const newOne = {lat,lng}; setCorLocation(newOne) ;       }

    const mapRef = React.useRef(undefined)

    const onLoad = React.useCallback(function callback(map){
        mapRef.current = map;

    },[])
    

    const onUnmount = React.useCallback(function callback(map){
        mapRef.current = undefined;
    },[])

    return(
       <div  style={{backgroundColor:'lightColor'}}>
           <GoogleMap
            mapContainerStyle={containerStyle}
            center={eventClicked}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
           >
               {upSideCor.map(({lat,lng}) => 
               <Marker 
                    position={{ lat: lat, lng:lng}}
                    clickable
                    icon={warningPin}
                    onClick={(event) => handleClick(lat,lng)}
                    animation={1}
                     />
               )}
               {waterFlowCor.map(({lat,lng}) => 
               <Marker 
                    position={{ lat: lat, lng:lng}}
                    clickable
                    icon={pin}
                    
                    onClick={(event) => handleClick(lat,lng)}
                    
                    // onFocus={(event) => handleFocus(lat,lng)}
                     />
               )}
           </GoogleMap>
             
       </div>
    );
}

export  {Map} 
            