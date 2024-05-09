import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // isme hamaien background change hoga to colors ko to variable mai hold karenge
  // aur phir vo UI pe reflect karana hai to state chnage karni pdegi usestate suse karenge

  const [color, setcolor] = useState("olive")

// onClick mai function paas karna hota function ka reference ni function se return ayega vo ni chaiye poora function chiaye
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justif-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
            <button
            onClick={()=> setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
                        <button
            onClick={()=> setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
                        <button
            onClick={()=> setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
                        <button
            onClick={()=> setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}>pink</button>
          </div>


        </div>

      </div>


    </>
  )
}

export default App
