import React from 'react'
import { useForm } from 'react-hook-form';

const From = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Tor Sob Data daikha lo", data);
  }

  return (
    <form onSubmit={handleSubmit((onSubmit))}
      className="flex flex-col gap-2 justify-center items-center mt-28">

      <div className='flex items-center justify-center gap-10' >
        <label htmlFor="">First Name :</label>
        <input  {...register('firstName', { required: true, minLength: { value: 3, message: "min Lenght 3" }, maxLength: { value: 6, message: "min Lenght 6" } })}
          type="text" placeholder='FirstName' className='border-2 border-black text-center' />
        {/* errors handeling */}
        {errors.firstName && <span className='text-red-500'>{errors.firstName.message}</span>}
        {/* errors handeling */}

      </div>

      <div className='flex items-center justify-center gap-10' >
        <label htmlFor="">Last Name :</label>
        <input  {...register('lastName', { required: true, minLength: 3, maxLength: 6, pattern: { value: /^[A-Za-z]+$/i, message: "pattern : /^[A-Za-z]+$/i" } })}
          type="text" placeholder='LastName' className='border-2 border-black text-center' />
        {errors.lastName && <span className='text-red-500'>{errors.lastName.message}</span>}
      </div>

      <div className='flex items-center justify-center gap-10' >
        <label htmlFor="">Email :</label>
        <input  {...register('email', { required: true })}
          type="email" placeholder='email' className='border-2 border-black text-center' />
      </div>

      <div className='flex items-center justify-center gap-10' >
        <label htmlFor="">Your Commint :</label>
        <textarea {...register('commint', { required: true, minLength: 10, maxLength: 100 })}
          type="" placeholder='Commint' className='border-2 border-black text-center' />
      </div>

      <button disabled={isSubmitting}
        className='border border-white bg-black text-white py-3 px-6'>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>


  )
}

export default From