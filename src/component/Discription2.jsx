import React from 'react'

const Discription2 = ({image,heading,paragraph}) => {
  return (
    <>
    <div className='mx-24 py-16'>
        <div className='flex justify-center items-center'>
            <div>
                <h1 className='text-4xl font-bold mb-4'>{heading}</h1>
                <p className='text-2xl font-normal mb-6'>{paragraph}</p>
            </div>
            <div className='mr-8'>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
</>
  )
}

export default Discription2