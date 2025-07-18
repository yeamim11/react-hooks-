// import React, { useEffect, useState } from 'react'

// const DataFetch = () => {
//     const [photo, setPhoto] = useState(null)

//     useEffect (() => {
//         setTimeout(() => {
//             fetch ("https://jsonplaceholder.typicode.com/comments")
//         .then((res) =>{
//             return res.json()
//         })
//         .then((data) => {
//             setPhoto(data)
//             console.log(photo);
            
//         })
//         })
        
//     }, [])
 
//   return (
//     <div>
//         <h1 className='text-center text-black font-bold'>Comments</h1>
//         {
//             photo.map((com) => {
//                 return <p>
//                     {com.title}
//                 </p>
               
//             })
//         }
//     </div>
//   )
// }

// export default DataFetch





import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.json())
            .then((data) => {
                setPhoto(data)
            })
            .catch((error) => console.error("Error fetching data:", error))
    }, [])

    return (
        <div>
            <h1 className='text-center text-black font-bold'>Comments</h1>
            {
                photo.slice(11 ,20).map((com) => ( 
                    <div key={com.id} className=' flex flex-col justify-center items-start gap-4 p-5 bg-black '>
                        <div className="bg-gray-800 p-6">
                            <p className='bg-red-500 text-black'><strong>{com.name}</strong></p>
                        <p className='text-white'>{com.body}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DataFetch
