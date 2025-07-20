import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [photo, setPhoto] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/tos")
            .then((res) => {
                if (!res.ok) {
                    throw Error("fetching is not successful")
                }else{
                    return res.json()

                }
                
            })
            .then((data) => {
                setPhoto(data)
                setError(null)
            })
            .catch((error) => {
                setError(error.message)
            })
    }, [])

    return (
        <div>
            <h1 className='text-center text-black font-bold'>Comments</h1>
            {error && (
                <p className="text-red-500 text-center font-semibold">{error}</p>
            )}
            {
                photo.slice(11, 20).map((com) => (
                    <div key={com.id} className=' flex flex-col justify-center items-start gap-4 p-5 '>
                     


                        {com.title}
                    </div>
                ))
            }
        </div>
    )
}

export default DataFetch







   {/* <div className="bg-gray-800 p-6">
                            <p className='bg-white text-black'><strong>{com.name}</strong></p>
                            <p className='text-white'>{com.body}</p>
                        </div> */}
                        {/* API */}  {/* https://jsonplaceholder.typicode.com/comments */}