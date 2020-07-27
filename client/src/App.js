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
      setData(data.data.data)
    }
    start()
  }, [])
  return (
    <div className="container">
      <div className="currency">
        {data?.data?.map(d=><Crypto d={d} />)}

      </div>
    </div>
  );
}

export default App;
