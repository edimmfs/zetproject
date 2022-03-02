import React from 'react'
import './Manage.css'

function Manage ({getValue, setOpenManage, getCorLocation}) {

    const nameAndStreet = {name:getCorLocation.name,street:getCorLocation.street }

  return (<div>
      
    <div className="Manage"><div className="Manage-tool"><h3 onClick={(e) => setOpenManage(false)} style={{cursor: 'pointer'}}>X</h3><div style={{textAlign: 'center'}}><h4>{nameAndStreet.name}</h4> {nameAndStreet.street} </div></div></div></div>
  )
}

export default Manage

// {getValue.map(({name,street}) => <div style={{borderBottom:"1px solid black"}}><h6><h5>{name}</h5> {street} <input style={{float:'left'}} type="checkbox" value={street}/></h6></div>)}