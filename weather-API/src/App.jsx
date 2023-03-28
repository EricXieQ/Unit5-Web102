import { useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'

function objOfTime_Temp (list_Time, list_Temp){
  
  let d = list_Time.length 
  let ret_obj = {}
  for(let i = 0; i < d; i++ ){

    let key = list_Time[i]
    let value = list_Temp[i]

    ret_obj[key] = value
  }

  return ret_obj;
}

function App() {
  const [Data, setData] = useState(null)

  const URL = "https://api.open-meteo.com/v1/forecast?latitude=42.89&longitude=-78.88&hourly=temperature_2m"

  const fetchData = async () => {

    const response = await axios.get(URL)
    setData(response.data)
  }

  useEffect(() => {fetchData()}, [])



  const listOfTemperature = Data&&Data.hourly.temperature_2m
  // console.log(listOfTemperature)
  const listOfTime = Data&&Data.hourly.time
  // console.log(listOfTime)

  const obj_time_temp = objOfTime_Temp(listOfTime,listOfTemperature)

  console.log(obj_time_temp)
  
  return (
    <div className="App">
      <h1 className="header">Buffalo Weather!</h1>
      <li>{Data&&listOfTime.map((time) => {time})}</li>
    </div>
  )
}

export default App
