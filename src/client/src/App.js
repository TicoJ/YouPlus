import React, {useEffect, useState} from 'react'

function App() {


  //contains backend data 
  const [backendData, setBackendData] = useState([{}])

  //fetch backend API
  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      //sets data from backend API into variable "backendData"
      data =>{
        setBackendData(data)
      }
    )
    //empty "[]" is so this only runs in first render"
  },[])
  return (
    <div>
      {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user,i)=>(
          <p key={i}>{user}</p>
        ))
      )
      }
    </div>
  )
}

export default App