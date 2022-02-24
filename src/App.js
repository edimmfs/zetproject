import {Map} from "./component/map";
import Events from './component/Events'
import './App.css';
import Bootnavbar from './component/Bootnavbar'
import 'bootstrap/dist/css/bootstrap.css'
import BottomPage from './component/BottomPage'


import {useState } from 'react'
import { useJsApiLoader } from "@react-google-maps/api";

const upSideEvents = [{
  name:'זרימה הפוכה',
  street:'חולון, אילת 179',
  
    lng:34.76466830,
    lat:32.00620310 
    
    
},{
  name:'זרימה הפוכה',
  street:'חולון, אילת 30',
  
    lng:34.76472500,
    lat:32.01924270
  
},{
  name:'זרימה הפוכה',
  street:'חולון, ההסתדרות 20',
  
    lng:34.76825310,
    lat:32.01776450
  
  
},{
  name:'זרימה הפוכה',
  street:'חולון, ההסתדרות 90',
  
    lng:34.77967830,
    lat:32.01705380 
  
  
}]

const defaultCenter = {
  lng:34.76466830,lat:32.00620310
}

function App() {
  
  
  
  const [countupside, setUpSide] = useState(0);
  
  const {isLoaded} = useJsApiLoader({
    id:'google-map-script',
    googleMapsApiKey: 'AIzaSyDs_F_NHWAK8fVwo7RHsuaUYZh6ATjkUrA',
  })
  
  



  return (
    <div className="App">
      
      <Bootnavbar />
      <br/>
      <div className="contain">

      <Events upside={countupside} setUpSide={setUpSide} prop = {upSideEvents} />
      {isLoaded ? <Map center={defaultCenter} upSideCor={upSideEvents}/> : <h2>Loading</h2>}

      </div>
      <BottomPage/>
               
    </div>
  );
}

export default App;
