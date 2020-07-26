import React, { useEffect } from 'react';


function App() {
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
    }
    start()
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
