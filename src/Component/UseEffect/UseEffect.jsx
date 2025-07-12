import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [loaging, setLoading] = useState(false);

    // const handel = () => {
    //     setCount((count) => count + 1); 
    // } 
    // ! button ar moddha funtion call korle useEffect run hobe na, karon useEffect ta component render er por run hoy

    useEffect(() => {
        console.log("useEffect");
        // ! useEffect er moddha jodi kono function call kori tahole seta component render er por run hobe
        // ! useEffect er moddha jodi kono function call na kori tahole seta component render er por run hobe na
    },[count])

    return (
        <div className='flex flex-col items-center justify-center bg-gray-100 p-6 gap-3'>
            {console.log("render")}
            <h1 className='text-4xl font-bold '>Counter : {count} </h1>
            <button
                className='p-3 text-3xl font-bold bg-black text-white  '
                onClick={() => { setCount((count) => count + 1) }}>
                +
            </button>
            
             <button
                className='p-3 text-3xl font-bold bg-black text-white  '
                onClick={() => {setLoading(!loaging)}}>
                LOADING
            </button>
        </div>
    )
}

export default UseEffect