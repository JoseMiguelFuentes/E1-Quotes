import { useState, useEffect } from 'react'
import Quotes from './componentes/Quotes'
import GetAuthor from './componentes/Author'
import quotes from './quotes.json'
import NextQuote from './componentes/NextButton'





function App() {
  const r = Math.floor(Math.random() * 255 )
  const g = Math.floor(Math.random() * 255 )
  const b = Math.floor(Math.random() * 255 )

  // let colorStart = `rgb(${r}, ${g}, ${b})`

  let [color, setColor]  = useState  ( (`rgb(${r}, ${g}, ${b})`) )
  function newColor  () {
    const r = Math.floor(Math.random() * 255 )
    const g = Math.floor(Math.random() * 255 )
    const b = Math.floor(Math.random() * 255 )
    console.log(color)
    return setColor (`rgb(${r}, ${g}, ${b})`)
  }
  console.log(color)
    
 
    
    
  
  
  return (
    <div className="App" style={{background:color}}>
      <article className='card'>
        <Quotes Color={color} quotes={quotes} newColor={newColor}/>
      </article>




    </div>
  )
}

export default App

