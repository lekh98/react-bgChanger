import React from 'react'
import { useState } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState("olive")
    
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inser-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{background:"red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
           style={{background:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
           style={{background:"blue"}}>blue</button>
           <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
           style={{background:"black"}}>Black</button>
           <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
           style={{background:"orange"}}>Orange</button>
           <button onClick={()=>setColor("aqua")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
           style={{background:"aqua"}}>Aqua</button>
           <button onClick={()=>setColor("crimson")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
           style={{background:"crimson"}}>Crimson</button>
           <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
           style={{background:"yellow"}}>Yellow</button>

        </div>
      </div>
      
    </div>
  )
}

export default BgChanger
