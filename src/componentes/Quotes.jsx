
import GetAuthor from './Author'
import NextQuote from './NextButton'
import { useState } from 'react'




const Quotes = ({Color, quotes, newColor}) =>{
  const [index, setIndex] = useState ( Math.floor( Math.random() * quotes.length)  )
  
  function nextMessage (){
    setIndex(Math.floor( Math.random() * quotes.length) )
    
    
  }
  return(
    <div className='quote__text' >
      <span style={{color:Color}}> {quotes[index].quote}  </span>
      <GetAuthor author={quotes[index].author} Color={Color}/>
      <NextQuote Color={Color} nextMessage={nextMessage} newColor={newColor}/>
    </div>

  )
}
export default Quotes