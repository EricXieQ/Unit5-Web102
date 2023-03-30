import React from 'react';
import './SideNav.css'

const SideNav = (props) => {

return (
  <div className="sidenav">
    <div className='menu'>
        <ul>
            <li className='menu-header'>
                    Dashboard
                    <div className='dataINFO'>
                        <li className='stats'>Total Data: {props.total}</li>
                        <li className='stats'>Average Temperture: {props.sum_temp/props.total}°C</li>
                        <li className='stats'>Hottest recently: 17.6°C</li>
                    </div>
            </li>

            <li className='menu-item'>
                Search 🔍
            </li>  

            <li className='menu-item'>
                About ℹ️ 
            </li>      
        </ul>     
    </div>

  </div>
)}

export default SideNav;