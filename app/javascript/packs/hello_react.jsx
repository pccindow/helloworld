import React from 'react'
import ReactDOM from 'react-dom'
class Hello extends React.Component {
  render () {
    return (
      <div><h1>Hello World</h1></div>
    ) 
  } 
} 

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello/>,
    document.body.appendChild(document.createElement('div')),
  )
})
