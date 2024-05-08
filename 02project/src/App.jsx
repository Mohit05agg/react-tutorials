import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter =15
  // now we use hooks to refelect the changes on UI
  let [counter, setcounter] = useState(15)

  const addvalue = () => {
    console.log("clicked", counter)
    //counter = counter +1 
    setcounter(counter + 1)
    // jaha jaha yeh {counter} use hoga vaha UI mai value update hogi react ki vaje se
    // vrna JS mai karte to baar baar refrence do get elementbyid , queryselector vagerga
  }
const removeValue = ()=>{
  setcounter(counter-1)
}
  return (
    <>
      <h1>chia aur react</h1>
      <h2>counter value:{counter}</h2>
      <button
        onClick={addvalue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
