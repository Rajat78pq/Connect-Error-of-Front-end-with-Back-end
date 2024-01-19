
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [responseData, setresponseData] = useState("");

  const getData = async ()=>{
    try{
      const response = await axios.get('http://localhost:8000/api/data');
      const data = response.data;
      setresponseData(data.message);
    }catch(error){
      console.error('Its my Error:',error)
    }
  }
  

  return (
    <>
    <button onClick={getData}>Oye Click me!</button>
    <a>{responseData}</a>
    </>
  )
}

export default App