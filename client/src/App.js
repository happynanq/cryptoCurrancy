import React, { useEffect, useState } from 'react';
import Crypto from './components/Crypto';


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const start = async()=>{
      const response = fetch("/api", {
        headers:{
          "Content-Type":"application/json"
        },
        method:"POST"
      }).then(r=>r.json())
      let data = await response
      console.log(data)
      setData(data)
    }
    // start()
    setData([1,2,3])
  }, [])
  return (
    <div className="container">
      <div className="currency">
        {data.map(d=><Crypto/>)}

      </div>
    </div>
  );
}

export default App;
