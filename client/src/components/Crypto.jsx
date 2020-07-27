import React from 'react'

const Crypto =({d})=>{
    const toCurrencyDollars=(n)=>{
    const newN = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(n)
    return newN>0 ? "-"+newN : newN
  
  }
  return(
    <div className=" wrapper">
      <div className="row info">
        <div className="col s1 img">
          <img src={d.logo} alt="logo"/>
        </div>
        <div className="col s5 name">
          <span className="symbol">{d.symbol}</span>
          <span>{ d.name}</span>

          
        </div>
        <div className="col s6 cost">
        <span> {toCurrencyDollars(d.currentCost)}</span>
        </div>
      </div>
      <div className="row course">
        <div className="col s6 hours">
          24h
          <span style={d.change24h<0?{color:"#c92424"} : {color:"#1da164"}}>
            {toCurrencyDollars(d.change24h)}
          </span>
        </div>
        <div className="col s6 days">
          7d
          <span style={d.change7d<0?{color:"#c92424"} : {color:"#1da164"}} >
            {toCurrencyDollars(d.change7d)}
          </span>
        </div>
      </div>
      <hr/>
    </div>
  )
}
export default Crypto