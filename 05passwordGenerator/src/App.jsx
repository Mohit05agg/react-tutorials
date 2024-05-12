import { useState, useCallback , useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length ,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)  // checkbox

  const [charAllowed, setCharAllowed] = useState(false) // character allow hai ya ni uska checkbox
  const [password, setPassword] = useState("")// password jo ayega isme ajayega default value empty daaldi
  

  // useRef HOOK'''

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"

    if(charAllowed) str += "!@#$%^&*"

    // abb random password genertae karne ke liye hamein string to mil gayi abb loop chalaake karduga iterate to random password ba jayega 
    // lekin password kab tak chalana vo Length govern karega
     
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()* str.length+1)
      pass += str.charAt(char) // loop khaam hone mai string yaha ajayegi
      // concat hota rahega
    }
    // read karenge value

    setPassword(pass)





  }, [length, numberAllowed, charAllowed, setPassword])  // callback hook iss liye use hota ki baar baar agar ek functionality use ho multiple jaghe to vaha kaam ayegag
  // isme ek function aata aur dusra array ke format ami dependencies aati

  const copyPsswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,990);
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  passwordGenerator()},[length,numberAllowed,charAllowed,setPassword]
)
   

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className ='className="flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value ={password}
        className='outline-node w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}

         />
         <button
         onClick={copyPsswordToClipboard}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange = {(e) => {setLength(e.target.value)}}
           />
           <label>Length:{length}</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           defaultChecked={numberAllowed}
           id="numberInput"
           onChange={()=>{
            setNumberAllowed((prev) => !prev);
           }} />
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           defaultChecked={charAllowed}
           id="CharacterInput"
           onChange={()=>{
            setCharAllowed((prev) => !prev);  // iss function mai hamne callback banaya ki (prev) => !prev matlab true value hogi to false ho ayegi flase hogi to true 
           }} />
           <label htmlFor="characterInput">characters</label>
        </div>
      </div>
    
    </div>
      
    </>
  )
}

export default App
