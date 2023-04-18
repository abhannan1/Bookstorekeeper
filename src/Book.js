import { useState } from "react"


const Book = ({image ,tittle, author, id , getBook, number}) => {

    const [toggleSelect, setToggleSelect]= useState("select")
    const [elementStyle, setElementStyle]= useState({
      border:"0px dashed blue"
    })
    // const style =()=>{
    //   return elementStyle
    // }
    const handleStyleChange= ()=> {
      if (elementStyle.border === "0px dashed blue") {
        setElementStyle({
          border: "2px dashed blue",
        });
        setToggleSelect("unselect")
      } else {
        setElementStyle({
          border: "0px dashed blue",
        });
        setToggleSelect("select")
      }
    }
  
    return (
        <>
      <article className='book'style={elementStyle} onClick={handleStyleChange}>
        <img src={image} alt={tittle}/>
        <h2 >{tittle}</h2>
        <h4>{author.toUpperCase()}</h4>
        {/* <button onClick={()=>getBook(id)} >click me</button> */}
        {/* <button onClick={handleStyleChange} >{toggleSelect}</button> */}
        <span className="number">{`# ${number + 1}`}</span>
      </article>
        </>
    )
  }

  export default Book