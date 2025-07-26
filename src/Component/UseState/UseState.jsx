import React, { useState } from 'react'

const UseState = () => {
    const [count , setCount] = useState(0)

    const handel = () => {
        setCount (count + 1)
    }
  return (
    <div className='flex flex-col gap-6 items-center justify-center'>
         <h1 className='text-4xl font-bold '>Counter : {count} </h1>

            <button className='p-3 font-bold bg-black text-white rounded-4xl ' 
            onClick={handel}>
                + Incriment  
            </button>
    </div>
  )
}

export default UseState