import { useState } from "react"
import LocationPicker from "./components/LocationPicker"

function App() {
  const [locationObj,setLocationObj] = useState();
  console.log('Location Obj---->',locationObj)
  return (
    <div>
      <LocationPicker onLocationSelect={setLocationObj}/>
    </div>
  )
}

export default App
