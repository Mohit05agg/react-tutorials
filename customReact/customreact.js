function customRender(reactElement, container){
    /* isme custom react kaise bnega bina for loop ke ek ek attribute ko leke
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElements.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    // Append the element to the container
    container.appendChild(domElement); */

    // forloop se karenge
    const domElement = document.createElement
(reactElement.type)
domElement.innerHTML = reactElement.children
for(const prop in reactElement.props){
    if(prop === 'children') continue
    domElement.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(domElement)

}


const reactElement = {
    // yeh jo tareeka hai vaise to yeh syntax sahi hai react mai aise likhte lekin HTML mai bhi likh sakte
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
      
}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)