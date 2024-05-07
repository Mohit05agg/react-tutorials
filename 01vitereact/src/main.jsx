import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>custom App ! chai</h1>
        </div>
    )
     
}

// const reactElement = {
//     // yeh chalega ni bcz pheli baat to object hai function ni and vite mai html componenets banake run karvaat bcz vo uska syntax hai yaha JS mai object banake key values pair haoi
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
      
// }

// implementation of React.createElement
const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me to visit google'
)

const anotherELement =(
    <a href ="https://google.com" target='_blank'>visit google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
   // MyApp() aise bhi kar saktehai
  // <MyApp/> 
  //reactElement chalega ni

  //anotherELement
  reactElement
 
)
