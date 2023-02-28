import React from 'react'
import "./localitycard.css"
import {AiOutlineRight} from "react-icons/ai";
function LocalityCard() {
  return (
    <div className="locality-card">
        <div className="locality-description">
            <h3>Lower Parel</h3>
            <h3>397 places</h3>
        </div>
         <h2><AiOutlineRight/></h2>
    </div>
  )
}

export default LocalityCard