import React from 'react'

const Createaccount = () => {
  return (
    <>
        <div className='py-8' style={{background:"#f3f4f6"}}>
            <div>
                <div className='text-center py-6'>
                    <h1 className='text-4xl font-medium'>Ready to get started? Get in touch or create an account.</h1>
                </div>
                <div className='flex justify-center mb-8'>
                    <button className='ml-6 border rounded-lg px-6 py-2 bg-blue-500 text-white mt-5'>Get In Touch</button>
                    <button className='ml-6 border rounded-md px-6 py-2 bg-transparent text-black border-slate-700 mt-5'>Call Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Createaccount