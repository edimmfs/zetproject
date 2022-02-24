import React from 'react'
import {GoogleMap, Marker} from '@react-google-maps/api'
import {defaultTheme} from './Theme';
import logo from './/b2df231c9d9242799f7645f80915d7e0 (2).png'
import pin from './pin.png'



const defaultOptions = {
    clickableIcons: false,
    styles: defaultTheme
}
const containerStyle = {
    width:'98%',
    height:'98%',
    borderRadius:'1%',
    boxShadow:'-1px -1px -10px white',
    zIndex:'1',
    
    
    
}

const Map = ({center,upSideCor}) =>{
    
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
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
           >
               {upSideCor.map(({lat,lng}) => 
               <Marker 
                    position={{ lat: lat, lng:lng}}
                    clickable
                    icon={pin}
                     />
               )}
           </GoogleMap>
             
       </div>
    );
}

export  {Map} 
            