import React, { useState } from 'react'
import './BackgroundChanger.css'


const BackgroundChanger = () => {
    const [color,setColor] = useState("olive");
    
    const oneClick = ()=>{
      setColor("red")
     
      
  }
  return (
    <div className='background-color' style={{backgroundColor:color}}>
        <div className="btn" style={{backgroundColor:"white"}}>
            <button onClick={oneClick} style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("crimson")} style={{backgroundColor:"crimson"}}>Crimson</button>
            <button onClick={()=>setColor("black")} style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>setColor("aqua")} style={{backgroundColor:"aqua"}}>Aqua</button>
            <button onClick={()=>setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
      
    </div>
  )
}

export default BackgroundChanger
