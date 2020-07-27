import React from 'react'

const Crypto =(props)=>{
  return(
    <div className="row">
      <div className="row info">
        <div className="col s1 img">
          img
        </div>
        <div className="col s5 name">
          name
        </div>
        <div className="col s6 cost">
        cost
        <span> 9800$</span>
        </div>
      </div>
      <div className="row course">
        <div className="col s6 hours">
          24h
          <span>+5%</span>
        </div>
        <div className="col s6 days">
          7d
          <span>+10</span>
        </div>
      </div>
    </div>
  )
}
export default Crypto