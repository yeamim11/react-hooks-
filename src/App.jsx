import React from 'react'
import UseEffect from './Component/UseEffect/UseEffect'
import From from './Component/hooksFrom/From'
import DataFetch from './Component/UseEffect/DataFetch'
import UseState from './Component/UseState/UseState'

const App = () => {
  return (
    <div >
      <h1 className='text-white bg-black w-full text-center text-5xl p-6'>Welcome to My React App</h1>
      {/* <UseEffect/> */}
      {/* <From/> */}
      {/* <DataFetch/> */}
      <UseState/>
    </div>
  )
}

export default App