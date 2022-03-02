import {Map} from "./component/map";
import Events from './component/Events'
import './App.css';
import Bootnavbar from './component/Bootnavbar'
import 'bootstrap/dist/css/bootstrap.css'
import BottomPage from './component/BottomPage'
import UpSideFlow from './component/UpSideFlow.js'
import Manage from './component/Manage.js'

import {useState } from 'react'
import { useJsApiLoader } from "@react-google-maps/api";

const upSideEvents = [{
  name:'זרימה הפוכה',
  street:'חולון, אילת 179',
  
    lng:34.76466830,
    lat:32.00620310,
    date:'17/2/22'
    
    
}]


const waterFlowEvents = [{
  name:'זרימת מים',
  street:'חולון, ההסתדרות 90',
  
    lng:34.77967830,
    lat:32.01705380 ,
    date:"10/10/21"
  
  
},{
  name:'זרימת מים',
  street:'חולון, אילת 30',
  
    lng:34.76472500,
    lat:32.01924270,
    date:'30/4/2011'
  
},{
  name:'זרימת מים',
  street:'חולון, ההסתדרות 20',
  
    lng:34.76825310,
    lat:32.01776450,
    date:'09/05/2012'
  
  
},{
  name:'זרימת מים',
  street:'בת-ים, נביאים 30',
  lng:34.74691120,
  lat:32.01287510,
  date:'19/12/2009'
}]


const defaultCenter = {
  lng:34.76466830,lat:32.00920310
}

function App() {
  
  
  //useState count waterFlowEvents
  const [countupside, setUpSide] = useState(0);
  //main events controle, events disaper if true (if event clicked) and than show the location of the events
  const [open, setOpen] = useState(true);
  //getValue from events (the value that was clicked)
  const [getValue, setValue] = useState();
  //useState count waterFlowEvents
  const [countWaterFlow, setCountWaterFlow] = useState(0);
  const [getCorLocation, setCorLocation] = useState(defaultCenter);
  //use to open manage modal
  const [openManage, setOpenManage] = useState(false)
  
  

  const {isLoaded} = useJsApiLoader({
    id:'google-map-script',
    googleMapsApiKey: 'AIzaSyDs_F_NHWAK8fVwo7RHsuaUYZh6ATjkUrA',
  })
  



  return (
    <div className="App">
      
      <Bootnavbar />
      
      {openManage && <div><Manage getValue={getValue} setOpenManage={setOpenManage} getCorLocation={getCorLocation}/></div>}
      <div className="contain">

      {open ?  <Events  setValue={setValue} setOpen={setOpen} upside={countupside} setUpSide={setUpSide} upSideEvents = {upSideEvents} waterFlowEvents = {waterFlowEvents} setCountWaterFlow={setCountWaterFlow} countWaterFlow={countWaterFlow}/> : <div className="contain-other"><UpSideFlow setCorLocation={setCorLocation} upSideEvents = {upSideEvents} waterFlowEvents = {waterFlowEvents} setOpen={setOpen} getValue={getValue} setOpenManage={setOpenManage} /></div>}
      {isLoaded ? <Map setCorLocation={setCorLocation} getCorLocation={getCorLocation}  upSideCor={upSideEvents} waterFlowCor={waterFlowEvents}/> : <h2>Loading</h2>}

      </div>
      <BottomPage/>
               
    </div>
  );
}

export default App;
