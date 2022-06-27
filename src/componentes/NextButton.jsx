



const NextQuote = ( {Color, nextMessage, newColor}) => {
  


  return (
    <div className="next" onClick={()=>{nextMessage(),newColor()}} style={{color:Color}}>
      <i className='bx bxs-skip-next-circle' ></i>
    </div>

)}
export default NextQuote